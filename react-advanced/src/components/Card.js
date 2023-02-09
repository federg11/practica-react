import React from 'react';

const Card = ({ character, getIdPersonaje }) => {
  const handleClick = () => {
    getIdPersonaje(character.id);
  };

  console.log(character);
  return (
        <div className="card">
            <img src={character.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5>{character.name}</h5>
                <p className="card-text">{character.species}</p>
                <button className='btn btn-primary' onClick={handleClick}>Go somewhere</button>
            </div>
        </div>
  );
};

export default Card;
