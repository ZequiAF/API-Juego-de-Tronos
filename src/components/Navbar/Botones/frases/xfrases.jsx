import React, { useState, useEffect } from 'react';
import { getRandomQuotes } from '../../../../services/gotapi';
import SearchBox from '../../SearchBox/SearchBox';
import CardList from '../../../CardList/CardList';

function FrasesAleatorias() {
    const [RandomQuotes, setRandomQuotes] = useState([]);
    const [search, setSearch] = useState('');
    //hook useEffect que se ejecuta para inicializar el componente
    useEffect(() => {

    //declaramos la función asíncrona que llama al servicio  
    async function fetchRandomQuotes() {
      let rqs = await getRandomQuotes();
      console.log(rqs);
      setRandomQuotes(rqs);
    }

    //llamamos a la función
    fetchRandomQuotes()

  }, [])
  const filteredQuotes = RandomQuotes.filter(quotes => {
    return quotes.name.toLowerCase().includes(search.toLowerCase());
  });

  //renderizado del componente:
  return (
        <div className="Resultado">
        <header className="App-header">
            <h1>Personajes</h1>
            <SearchBox
            placeholder="Búsqueda frases"
            onSearchChange={(e) => setSearch(e.target.value)}
            />
            <CardList RandomQuotes={filteredQuotes} />
        </header>
        </div>
    );
  }
  
  export default FrasesAleatorias