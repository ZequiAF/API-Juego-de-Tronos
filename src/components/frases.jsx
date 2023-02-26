import React, { useState, useEffect } from 'react';
import { getQuoteByCharacter } from '../services/gotapi';
import SearchBox from '../components/SearchBox/SearchBox';
import CardList from '../components/CardList/CardList';

/* FALTA:
 * Sacar x frases cualquiera de cualquier personaje:
 * Sacar x número de frases de un personaje concreto:
 * Sacar 1 frase cualquiera de un personaje concreto:
 */

function Frase() {
    const [QuoteByCharacter, setQuoteByCharacter] = useState([]);
    const [search, setSearch] = useState('');
    //hook useEffect que se ejecuta para inicializar el componente
    useEffect(() => {

    //declaramos la función asíncrona que llama al servicio  
    async function fetchteByCharacter() {
      let qbc = await getQuoteByCharacter();
      console.log(qbc);
      setQuoteByCharacter(qbc);
    }

    //llamamos a la función
    fetchteByCharacter()

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
  
  export default Frase
  