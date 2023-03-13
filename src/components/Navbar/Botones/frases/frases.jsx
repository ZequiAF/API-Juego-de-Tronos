import React from "react";
import { Link, Outlet } from "react-router-dom";

export async function loader() {
  return null;
}

export default function frases() {
  return (
    <>
      <div>
        <div id="cuerpo_frases" className="row">
        <div className="texto col-6">
          <h2><u>Frases</u></h2>
          <div>
            <p>Listar una frase aleatoria:</p>
            <Link to="buscar_frase_aleatoria"><button className="btn_busqueda">
              FRASE ALEATORIA
            </button></Link>
          </div>
          <br />

          <div>
            <p>Buscar un número de frases aleatorias.</p>
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
            <p>Sacar una frase de un personaje. (Ej: Jon):</p>
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
            <p>Buscar un número de frases de un personaje.</p>
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
