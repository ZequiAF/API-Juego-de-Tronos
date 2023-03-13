import React from 'react';
import Card from '../Not Card/Card';

const CardList = ({ character }) => {
  return (
    <div className='card-list' >
      {character.map(character =>

        <Card character={character} key={character.url} />
      )}
    </div>
  )
};

export default CardList;