import React from "react";
import { useLoaderData } from "react-router-dom";
import { getCharactersByName } from "../../../../services/gotapi";

// PROP TYPES!
import PropTypes from 'prop-types';
// DECLARAMOS LO QUE VA A HACER LA PROPTYPE
const Paragrhafing = ({label}) => <p>{label}</p>
// DECIMOS QUE SEA STRING REQUERIDO
Paragrhafing.propTypes = {
  label: PropTypes.string.isRequired
}

export async function loader() {
  return getCharactersByName(document.getElementById("nombrebuscarpersonaje").value);
}

export default function buscar_pj_nombre() {

  const resultado = useLoaderData();

  return (
    <>
      <div className="col-mx-3 col-md-4 col-sm-12">
        <div className="card2">
          <Paragrhafing label="---------------------------"/>
          <p><span className="titulosformat">Nombre:</span> <span className="parrafoformat">{resultado[0].name}</span></p>
          <p><span className="titulosformat">Nickname:</span> <span className="parrafoformat">{resultado[0].slug}</span></p>
          <p><span className="titulosformat">Linaje:</span> <span className="parrafoformat">{resultado[0].house.slug}</span></p>
          <p><span className="titulosformat">Nombre de la Casa:</span> <span className="parrafoformat">{resultado[0].house.name}</span></p>
          <p><span className="titulosformat">Frases:</span> <span className="parrafoformat">&#x22;{resultado[0].quotes}&#x22;</span></p>
          <Paragrhafing label="---------------------------"/>
        </div>
      </div>
    </>
  );
}
