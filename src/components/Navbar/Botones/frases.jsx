import React, { useState, useEffect } from 'react';
import { getRandomQuote } from '../services/gotapi';
import SearchBox from '../SearchBox/SearchBox';
import CardList from '../components/CardList/CardList';

function FraseAleatoria() {
    const [RandomQuote, setRandomQuote] = useState([]);
    const [search, setSearch] = useState('');
    //hook useEffect que se ejecuta para inicializar el componente
    useEffect(() => {

    //declaramos la función asíncrona que llama al servicio  
    async function fetchRandomQuote() {
      let rq = await getRandomQuote();
      console.log(rq);
      setRandomQuote(rq);
    }

    //llamamos a la función
    fetchRandomQuote()

  }, [])
  const filteredQuote = RandomQuote.filter(quote => {
    return quote.name.toLowerCase().includes(search.toLowerCase());
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
            <CardList RandomQuote={filteredQuote} />
        </header>
        </div>
    );
  }
  
  export default FraseAleatoria
  