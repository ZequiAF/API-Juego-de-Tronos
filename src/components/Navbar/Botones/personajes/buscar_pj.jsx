import React from "react";
import { useLoaderData } from "react-router-dom";
import { getCharactersAndQuotes } from "../../../../services/gotapi";

// PROP TYPES!
import PropTypes from 'prop-types';
// DECLARAMOS LO QUE VA A HACER LA PROPTYPE
const Paragrhafing = ({label}) => <p>{label}</p>
// DECIMOS QUE SEA STRING REQUERIDO
Paragrhafing.propTypes = {
  label: PropTypes.string.isRequired
}

export async function loader() {
  return getCharactersAndQuotes();
}

export default function buscar_pj() {

  const resultado = useLoaderData();

  return (
    <>
      {resultado.map(({ name, slug, quotes }) =>
        <div key="" className="col-6">
          <Paragrhafing label="---------------------------"/>
          <p><span className="titulosformat">Titulo:</span> <span className="parrafoformat">{name}</span></p>
          <p><span className="titulosformat">Nickname:</span> <span className="parrafoformat">{slug}</span></p>
          <p><span className="titulosformat">Frases:</span> <span className="parrafoformat">{quotes}</span></p>
        </div>
      )} <Paragrhafing label="---------------------------"/>
    </>
  );
}
