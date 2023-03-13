import React from "react";
import { useLoaderData } from "react-router-dom";
import { getQuoteByCharacter } from "../../../../services/gotapi";

// PROP TYPES!
import PropTypes from 'prop-types';
// DECLARAMOS LO QUE VA A HACER LA PROPTYPE
const Paragrhafing = ({label}) => <p>{label}</p>
// DECIMOS QUE SEA STRING REQUERIDO
Paragrhafing.propTypes = {
  label: PropTypes.string.isRequired
}

export async function loader() {
  return getQuoteByCharacter(document.getElementById("nombrebuscarnumerofrasepersonaje").value, document.getElementById("numerobuscarnumerofrasepersonaje").value);
}

export default function buscar_frase_aleatoria() {

  const resultado = useLoaderData();

  return (
    <>
      <div className="col-12">
        {resultado.map(({ sentence, character }) =>
          <div key="">
            <Paragrhafing label="---------------------------"/>
            <p><span className="parrafoformat">&#x22;{sentence}&#x22;</span></p>
            <p>- {character.name}</p>

          </div>
        )}<Paragrhafing label="---------------------------"/>
      </div>
    </>
  );
}
