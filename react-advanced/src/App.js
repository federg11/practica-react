import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Card from './components/Card';

function App() {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [idPersonaje, setIdPersonaje] = useState(1);

  const getCharacter = async () => {
    setLoading(true);

    const { data } = await axios('https://rickandmortyapi.com/api/character');
    setCharacters(data.results);

    setLoading(false);
  };

  useEffect(() => {
    getCharacter();
  }, []);

  const getIdPersonaje = (id) => {
    setIdPersonaje(id);
  };

  const getCharacterById = async () => {
    const { data } = await axios(`https://rickandmortyapi.com/api/character/${idPersonaje}`);
    console.log(data);
  };

  useEffect(() => {
    getCharacterById();
  }, [idPersonaje]);

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
