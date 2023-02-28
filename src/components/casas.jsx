import React, { useState, useEffect } from 'react';
import { getCharactersByHouse } from '../services/gotapi';
import SearchBox from '../components/SearchBox/SearchBox';
import CardList from '../components/CardList/CardList';

function Casa() {
    const [CharactersByHouse, setCharactersByHouse] = useState([]);
    const [search, setSearch] = useState('');
    //hook useEffect que se ejecuta para inicializar el componente
    useEffect(() => {

    //declaramos la función asíncrona que llama al servicio  
    async function fetchCharactersByHouse() {
      let cbn = await getCharactersByHouse();
      console.log(cbn);
      setCharactersByHouse(cbn);
    }

    //llamamos a la función
    fetchCharactersByHouse()

  }, [])
  const filteredHouses = CharactersByHouse.filter(house => {
    return house.name.toLowerCase().includes(search.toLowerCase());
  });

  //renderizado del componente:
  return (
        <div className="Resultado">
        <header className="App-header">
            <h1>CASAS</h1>
            <SearchBox
            placeholder="Búsqueda casas"
            onSearchChange={(e) => setSearch(e.target.value)}
            />
            <CardList CharactersByHouse={filteredHouses} />
        </header>
        </div>
    );
  }
  
  export default Casa