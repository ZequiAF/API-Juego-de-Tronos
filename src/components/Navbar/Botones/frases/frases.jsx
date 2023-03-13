import React from "react";
import { Link, Outlet } from "react-router-dom";

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

export default function frases() {
  return (
    <>
      <div>
        <div id="cuerpo_frases" className="row">
        <div className="texto col-6">
          <Header2 label="Frases"/>
          <div>
            <Paragrhafing label="Listar una frase aleatoria:"/>
            <Link to="buscar_frase_aleatoria"><button className="btn_busqueda">
              FRASE ALEATORIA
            </button></Link>
          </div>
          <br />

          <div>
            <Paragrhafing label="Buscar un número de frases aleatorias."/>
            <div>
              Nº<input type="number" id="numerofrasealeatoria"
                min="2" max="25"></input>
              <span className="espacio"></span>
              <Link to="buscar_frases_aleatorias"><button className="btn_busqueda">
                BUSCAR
              </button></Link>
            </div>
          </div>
          <br />
          <div>
            <Paragrhafing label="Sacar una frase de un personaje. (Ej: Jon):"/>
            <div>
              <input type="text" id="nombrebuscarfrasepersonaje" />
              <span className="espacio"></span>
              <Link to="buscar_frase_pj"><button className="btn_busqueda">
                FRASE DE PERSONAJE
              </button></Link>
            </div>
          </div>
          <br />
          <div>
            <Paragrhafing label="Buscar un número de frases de un personaje."/>
            <div>
              Nombre: <input type="text" id="nombrebuscarnumerofrasepersonaje" min="2" max="25" />
              <span className="espacio"></span>
              Nº<input type="number" id="numerobuscarnumerofrasepersonaje"
                min="2" max="25"></input>
              <span className="espacio"></span>
              <Link to="buscar_frases_pj"><button className="btn_busqueda" id="buscarfrasespersonaje">
                BUSCAR
              </button></Link>
            </div>
          </div>
        </div>
        <div id="resultado_frases" className="resultado_tipo col-6">
          <Outlet></Outlet>
        </div>
      </div>
      </div>
    </>
  );
}
