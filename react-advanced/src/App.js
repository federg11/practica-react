import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';



function App() {

  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  const getCharacter = async() => {
    setLoading(true);
    const {data} = await axios('https://rickandmortyapi.com/api/character');
    setCharacters(data.results);
    setLoading(false);
  };

  useEffect(() => {
    getCharacter();
  }, [])
  console.log(characters);
  
  
  return (
    <div className="App">
      {
        loading && <p>Cargando....</p>
      }
      {
        characters?.map(character => 
          <h1 key={character.id}>{character.name}</h1>)
      }
      <p>nueva branch</p>
    </div>

  );
}

export default App;
