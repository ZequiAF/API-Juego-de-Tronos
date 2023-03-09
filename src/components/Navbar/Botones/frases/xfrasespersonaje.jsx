import React, { useState, useEffect } from 'react';
import { getQuoteByCharacter } from '../../../../services/gotapi';
import SearchBox from '../../SearchBox/SearchBox';
import CardList from '../../../CardList/CardList';

export function XFrasesPersonaje() {
    const [QuoteByCharacter, setQuoteByCharacter] = useState([]);
    const [search, setSearch] = useState('');
    //hook useEffect que se ejecuta para inicializar el componente
    useEffect(() => {

    //declaramos la función asíncrona que llama al servicio  
    async function fetchQuoteByCharacter() {
      let qbc = await getQuoteByCharacter();
      console.log(qbc);
      setQuoteByCharacter(qbc);
    }

    //llamamos a la función
    fetchQuoteByCharacter()

  }, [])
  const filteredQuotes = QuoteByCharacter.filter(quote => {
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
            <CardList QuoteByCharacter={filteredQuotes} />
        </header>
        </div>
    );
  }