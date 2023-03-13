import React from "react";
import {Link, Outlet } from "react-router-dom";

export async function loader() {
  return null;
}

export default function Personajes() {
  return (
    <>
      <div id="cuerpo_personajes" className="row">
          <div className="texto col-6">
            <h2><u>Personajes</u></h2>
            <div>
              <p>Listar todos los personajes con sus frases:</p>
              <Link to="buscar_pj"><button className="btn_busqueda">
                BUSCAR PERSONAJES
              </button></Link>
            </div>
            <br />
            <div>
              <p>Mostrar información de 1 personaje de la serie:
                Introduzca un nombre sencillo. <br /> (Ej: Jon):</p>
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