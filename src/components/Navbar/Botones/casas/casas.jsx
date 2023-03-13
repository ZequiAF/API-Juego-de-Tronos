import React from "react";
import { Link, Outlet } from "react-router-dom";

// PROP TYPES!
import PropTypes from 'prop-types';
// DECLARAMOS LO QUE VA A HACER LA PROPTYPE
const Header2 = ({ label }) => <u><h2>{label}</h2></u>
const Paragrhafing = ({ label }) => <p>{label}</p>
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

export default function Casas() {
  return (
    <>
      <div id="cuerpo__casas" className="row">
        <div className="texto col-6">
          <Header2 label="Casas" />
          <div>
            <Paragrhafing label="Listar todas las casas:" />
            <Link to="buscar_casas"><button className="cuerpo__casas--btnbusqueda" id="buscarcasas">
              BUSCAR CASAS
            </button></Link>
          </div>
          <br />
          <div>
            <Paragrhafing label="Listar los miembros de una casa por nombre de la misma (Ej: lannister): " />
            <div>
              <input type="text" id="nombrebuscarcasa" />
              <span className="cuerpo__frases--espacio"></span>
              <Link to="buscar_casa"><button className="cuerpo__casas--btnbusqueda" id="buscarcasa">
                BUSCAR CASA
              </button></Link>
            </div>
          </div>
        </div>
        <div id="resultado_casas" className="cuerpo__casas--resultadotipo col-6">
          <div id="resultadocasa" className="row row-fixed">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}