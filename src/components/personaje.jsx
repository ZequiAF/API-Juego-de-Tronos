import React, { useState, useEffect } from 'react';
import { getCharactersByName } from '../services/gotapi';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList/CardList';

function Personaje() {
    const [CharactersByName, setCharactersByName] = useState([]);
    const [search, setSearch] = useState('');
    //hook useEffect que se ejecuta para inicializar el componente
    useEffect(() => {

    //declaramos la función asíncrona que llama al servicio  
    async function fetchCharactersByName() {
      let cbn = await getCharactersByName();
      console.log(cbn);
      setCharactersByName(cbn);
    }

    //llamamos a la función
    fetchCharactersByName()

  }, [])
  const filteredCharaters = CharactersByName.filter(character => {
    return character.name.toLowerCase().includes(search.toLowerCase());
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
  
  export default Personaje