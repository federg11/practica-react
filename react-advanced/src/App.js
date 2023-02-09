import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Card from './components/Card';
import useFetch from './hooks/CustomFetch/useFetch';

function App() {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [idPersonaje, setIdPersonaje] = useState(1);

  const { data } = useFetch('https://rickandmortyapi.com/api/character');

  const getCharacter = async () => {
    setLoading(true);
    setCharacters(data?.results);
    setLoading(false);
  };

  useEffect(() => {
    getCharacter();
  }, []);

  const getIdPersonaje = (id) => {
    setIdPersonaje(id);
  };

  const getCharacterById = async () => {
    console.log(data);
  };

  useEffect(() => {
    getCharacterById();
  }, [idPersonaje]);

  console.log(data);

  return (
    <div className="App">
      {
        loading && <p>Cargando....</p>
      }
      {
        characters?.map(character => <Card
        key={character.id}
        character={character}
        getIdPersonaje={getIdPersonaje} />)
      }
    </div>

  );
}

export default App;
