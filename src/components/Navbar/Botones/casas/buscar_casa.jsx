import React from "react";
import { useLoaderData } from "react-router-dom";
import { getHouseBySlug } from "../../../../services/gotapi";

// PROP TYPES!
import PropTypes from 'prop-types';
// DECLARAMOS LO QUE VA A HACER LA PROPTYPE
const Paragrhafing = ({label}) => <p>{label}</p>
// DECIMOS QUE SEA STRING REQUERIDO
Paragrhafing.propTypes = {
  label: PropTypes.string.isRequired
}

export async function loader() {
  return getHouseBySlug(document.getElementById("nombrebuscarcasa").value);
}

export default function buscar_casa() {

  const resultado = useLoaderData();

  return (
    <>
      <div className="col-mx-3 col-md-4 col-sm-12">
        <div className="card2">
          <Paragrhafing label="---------------------------"/>
          <p><span className="titulosformat">Titulo:</span><span className="parrafoformat"> {resultado[0].name}</span></p>
          <p><span className="titulosformat">Casa:</span><span className="parrafoformat"> {resultado[0].slug}</span></p>
          <p><span className="titulosformat">Miembros:</span></p>
          <ul>
            {(resultado[0].members).map(({ name, slug }) =>
              <li key="">
                {name}
                {slug}
              </li>
            )}
          </ul>
          <Paragrhafing label="---------------------------"/>
        </div>
      </div>
    </>
  );
}

