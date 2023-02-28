import React, { useState, useEffect } from 'react';
import { getHouseBySlug } from '../services/gotapi';
import SearchBox from '../components/SearchBox/SearchBox';
import CardList from '../components/CardList/CardList';

function Casa() {
    const [HouseBySlug, setHouseBySlug] = useState([]);
    const [search, setSearch] = useState('');
    //hook useEffect que se ejecuta para inicializar el componente
    useEffect(() => {

    //declaramos la función asíncrona que llama al servicio  
    async function fetchHouseBySlug() {
      let hbs = await getHouseBySlug();
      console.log(hbs);
      setHouseBySlug(hbs);
    }

    //llamamos a la función
    fetchHouseBySlug()

  }, [])
  const filteredHouse = HouseBySlug.filter(houseslug => {
    return houseslug.name.toLowerCase().includes(search.toLowerCase());
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
            <CardList HouseBySlug={filteredHouse} />
        </header>
        </div>
    );
  }
  
  export default Casa