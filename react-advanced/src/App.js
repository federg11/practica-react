import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Card from './components/Card';
import useFetch from './hooks/CustomFetch/useFetch';

function App() {
  const [idPersonaje, setIdPersonaje] = useState(1);

  const { data, loading } = useFetch('https://rickandmortyapi.com/api/character');

  const getIdPersonaje = (id) => {
    setIdPersonaje(id);
  };

  const getCharacterById = async () => {
    fetch(`https://rickandmortyapi.com/api/character/${idPersonaje}`)
    .then(resp => resp.json())
    .then(json => console.log(json));
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
        data?.map(character => <Card
        key={character.id}
        character={character}
        getIdPersonaje={getIdPersonaje} />)
      }
    </div>

  );
}

export default App;
