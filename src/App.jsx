import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [personaje, setCharactersAndQuotes] = useState([]);
  const [personajes, setCharactersByName] = useState([]);
  const [casas, setCharactersByHouse] = useState([]);
  const [casa, setHouseBySlug] = useState([]);
  const [frasealeatoria, setRandomQuote] = useState([]);
  const [frasesaleatorias, setRandomQuotes] = useState([]);
  const [xfrasespersonaje, setQuoteByCharacter] = useState([]);
  const [frasealeatoriapersonaje, setQuoteByCharacter1] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {

    //declaramos la función asíncrona que llama al servicio  
    async function fetchPokes() {
      let p = await getPokes();
      console.log(p);
      setPokes(p);
    }
     //llamamos a la función
     fetchPokes()

    }, [])

  //METER ALGO
  return (
    <div className="App">
      <div>

      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
