import React, { useState, useEffect } from 'react';
import { getQuoteByCharacter1 } from '../services/gotapi';
import SearchBox from '../components/SearchBox/SearchBox';
import CardList from '../components/CardList/CardList';

function FrasesPersonaje() {
    const [QuoteByCharacter1, setQuoteByCharacter1] = useState([]);
    const [search, setSearch] = useState('');
    //hook useEffect que se ejecuta para inicializar el componente
    useEffect(() => {

    //declaramos la función asíncrona que llama al servicio  
    async function fetchQuoteByCharacter1() {
      let qbc = await getQuoteByCharacter1();
      console.log(qbc);
      setQuoteByCharacter1(qbc);
    }

    //llamamos a la función
    fetchQuoteByCharacter1()

  }, [])
  const filteredQuotes1 = QuoteByCharacter1.filter(quote => {
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
            <CardList QuoteByCharacter1={filteredQuotes1} />
        </header>
        </div>
    );
  }
  
  export default FrasesPersonaje