import React from "react";
import {Link, Outlet } from "react-router-dom";

// PROP TYPES!
import PropTypes from 'prop-types';
// DECLARAMOS LO QUE VA A HACER LA PROPTYPE
const Header2 = ({label}) => <u><h2>{label}</h2></u>
const Paragrhafing = ({label}) => <p>{label}</p>
// DECIMOS QUE SEA STRING REQUERIDO
Header2.propTypes = {
  label: PropTypes.string.isRequired
}
Paragrhafing.propTypes = {
  label: PropTypes.string.isRequired
}

export async function loader() {
  return null;
}

export default function Personajes() {
  return (
    <>
      <div id="cuerpo_personajes" className="row">
          <div className="texto col-6">
            <Header2 label="Personajes"/>
            <div>
              <Paragrhafing label="Listar todos los personajes con sus frases:"/>
              <Link to="buscar_pj"><button className="btn_busqueda">
                BUSCAR PERSONAJES
              </button></Link>
            </div>
            <br />
            <div>
              <Paragrhafing label="Mostrar información de 1 personaje de la serie: (Ej: jon, sansa):"/>
              <div>
                <input type="text" id="nombrebuscarpersonaje" />
                <span className="espacio"></span>
                <Link to="buscar_pj_nombre"><button className="btn_busqueda">
                  BUSCAR PERSONAJE
                </button></Link>
              </div>
            </div>
          </div>
          <div id="resultado_personajes" className="resultado_tipo col-6">
            <div className="row row-fixed">
                <Outlet></Outlet>
            </div>
          </div>
        </div>
    </>
  );
}