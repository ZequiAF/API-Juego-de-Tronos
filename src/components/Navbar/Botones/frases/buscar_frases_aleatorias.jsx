import React from "react";
import { useLoaderData } from "react-router-dom";
import { getRandomQuotes } from "../../../../services/gotapi";

// PROP TYPES!
import PropTypes from 'prop-types';
// DECLARAMOS LO QUE VA A HACER LA PROPTYPE
const Paragrhafing = ({ label }) => <p>{label}</p>
// DECIMOS QUE SEA STRING REQUERIDO
Paragrhafing.propTypes = {
  label: PropTypes.string.isRequired
}

export async function loader() {
  return getRandomQuotes(document.getElementById("numerofrasealeatoria").value);
}

export default function buscar_frase_aleatorias() {

  const resultado = useLoaderData();

  return (
    <>
      <div className="col-12">
        {resultado.map(({ sentence, character }) =>
          <div key="">
            <Paragrhafing label="---------------------------" />
            <p><span className="resultado__parrafoformat">&#x22;{sentence}&#x22;</span></p>
            <p>- {character.name}</p>
          </div>
        )}
        <Paragrhafing label="---------------------------" />
      </div>
    </>
  );
}
