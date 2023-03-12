import React from 'react';
import './Card.css';


const Card = ({ character }) => {
  return (
    <div className="card">
      <a href={`https://api.gameofthronesquotes.xyz/v1/character/${character.name}`} target="_blank" rel="noreferrer">
        <h3>{character.name[0].toUpperCase()}</h3>
      </a>
    </div>);
}

export default Card;