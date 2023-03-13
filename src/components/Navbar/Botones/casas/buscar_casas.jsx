import React from "react";
import { useLoaderData } from "react-router-dom";
import { getCharactersByHouse } from "../../../../services/gotapi";

// PROP TYPES!
import PropTypes from 'prop-types';
// DECLARAMOS LO QUE VA A HACER LA PROPTYPE
const Paragrhafing = ({label}) => <p>{label}</p>
// DECIMOS QUE SEA STRING REQUERIDO
Paragrhafing.propTypes = {
  label: PropTypes.string.isRequired
}

export async function loader() {
  return getCharactersByHouse();
}

export default function buscar_casas() {

  const resultado = useLoaderData();

  return (
    <>
      {resultado.map(({ name, slug, members }) =>
        <div key="" className="col-6">
          <Paragrhafing label="---------------------------"/>
          <p><span className="titulosformat">Titulo:</span> <span className="parrafoformat">{name}</span></p>
          <p><span className="titulosformat">Casa:</span> <span className="parrafoformat">{slug}</span></p>
          <p><span className="titulosformat">Miembros:</span>
            <ul>
              {members.map(({ name, slug }) =>
                <li key="">
                  {name}
                  {slug}
                </li>
              )}
            </ul>
          </p>
        </div>

      )} <Paragrhafing label="---------------------------"/>
    </>
  );
}
