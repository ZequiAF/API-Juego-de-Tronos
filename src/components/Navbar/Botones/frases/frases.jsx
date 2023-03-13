import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../../../index.css";

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

export default function frases() {
  return (
    <>
      <div>
        <div id="cuerpo__frases" className="row">
          <div className="texto col-6">
            <Header2 label="Frases" />
            <div>
              <Paragrhafing label="Listar una frase aleatoria:" />
              <Link to="buscar_frase_aleatoria"><button className="cuerpo__frases--btnbusqueda">
                FRASE ALEATORIA
              </button></Link>
            </div>
            <br />

            <div>
              <Paragrhafing label="Buscar un número de frases aleatorias." />
              <div>
                Nº<input type="number" id="numerofrasealeatoria"
                  min="2" max="25"></input>
                <span className="cuerpo__frases--espacio"></span>
                <Link to="buscar_frases_aleatorias"><button className="cuerpo__frases--btnbusqueda">
                  BUSCAR
                </button></Link>
              </div>
            </div>
            <br />
            <div>
              <Paragrhafing label="Sacar una frase de un personaje. (Ej: jon, sansa):" />
              <div>
                <input type="text" id="nombrebuscarfrasepersonaje" />
                <span className="cuerpo__frases--espacio"></span>
                <Link to="buscar_frase_pj"><button className="cuerpo__frases--btnbusqueda">
                  FRASE DE PERSONAJE
                </button></Link>
              </div>
            </div>
            <br />
            <div>
              <Paragrhafing label="Buscar un número de frases de un personaje." />
              <div>
                Nombre: <input type="text" id="nombrebuscarnumerofrasepersonaje" min="2" max="25" />
                <span className="cuerpo__frases--espacio"></span>
                Nº<input type="number" id="numerobuscarnumerofrasepersonaje"
                  min="2" max="25"></input>
                <span className="cuerpo__frases--espacio"></span>
                <Link to="buscar_frases_pj"><button className="cuerpo__frases--btnbusqueda" id="buscarfrasespersonaje">
                  BUSCAR
                </button></Link>
              </div>
            </div>
          </div>
          <div id="resultado_frases" className="cuerpo__frases--resultadotipo col-6">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}
