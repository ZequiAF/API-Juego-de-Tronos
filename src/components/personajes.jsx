import React, { useState, useEffect } from 'react';
import { getCharactersAndQuotes } from '../services/gotapi';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList/CardList';

function Todos_Personaje() {
  const [CharactersAndQuotes, setCharactersAndQuotes] = useState([]);
  const [search, setSearch] = useState('');
  //hook useEffect que se ejecuta para inicializar el componente
  useEffect(() => {

  //declaramos la función asíncrona que llama al servicio  
  async function fetchCharactersAndQuotes() {
    let cbn = await getCharactersAndQuotes();
    console.log(cbn);
    setCharactersAndQuotes(cbn);
  }

  //llamamos a la función
  fetchCharactersAndQuotes()

}, [])
const filteredCharaters = CharactersAndQuotes.filter(charactersandquotes => {
  return charactersandquotes.name.toLowerCase().includes(search.toLowerCase());
});

//renderizado del componente:
return (
      <div className="Resultado">
      <header className="App-header">
          <h1>Personajes</h1>
          <SearchBox
          placeholder="Búsqueda personaje"
          onSearchChange={(e) => setSearch(e.target.value)}
          />
          <CardList CharactersByName={filteredCharaters} />
      </header>
      </div>
  );
}

export default Todos_Personaje