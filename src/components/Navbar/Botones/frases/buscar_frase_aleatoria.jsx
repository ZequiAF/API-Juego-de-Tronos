import React from "react";
import { useLoaderData } from "react-router-dom";
import { getRandomQuote } from "../../../../services/gotapi";


// PROP TYPES!
import PropTypes from 'prop-types';
// DECLARAMOS LO QUE VA A HACER LA PROPTYPE
const Paragrhafing = ({label}) => <p>{label}</p>
// DECIMOS QUE SEA STRING REQUERIDO
Paragrhafing.propTypes = {
  label: PropTypes.string.isRequired
}

export async function loader() {
  return getRandomQuote();
}

export default function buscar_frase_aleatoria() {

  const resultado = useLoaderData();

  return (
    <>
      <div>
        <Paragrhafing label="---------------------------"/>
        <p><span className="parrafoformat">&#x22;{resultado.sentence}&#x22;</span></p>
        <p>- {resultado.character.name}</p>
        <Paragrhafing label="---------------------------"/>
      </div>
    </>
  );
}
