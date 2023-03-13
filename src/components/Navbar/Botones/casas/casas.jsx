import React from "react";
import {Link, Outlet } from "react-router-dom";

export async function loader() {
  return null;
}

export default function Casas() {
  return (
    <>
      <div id="cuerpo_casas" className="row">
          <div className="texto col-6">
            <h2><u>Casas</u></h2>
            <div>
              <p>Listar todas las casas:</p>
              <Link to="buscar_casas"><button className="btn_busqueda" id="buscarcasas">
                BUSCAR CASAS
              </button></Link>
            </div>
            <br />
            <div>
              <p>Listar los miembros que pertenecen a una casa concreta. <br />
                Introduzca nombre de la casa (Ej: lannister):</p>
              <div>
                <input type="text" id="nombrebuscarcasa" />
                <span className="espacio"></span>
                <Link to="buscar_casa"><button className="btn_busqueda" id="buscarcasa">
                  BUSCAR CASA
                </button></Link>
              </div>
            </div>
          </div>
          <div id="resultado_casas" className="resultado_tipo col-6">
            <div id="resultadocasa" className="row row-fixed">
            <Outlet />
            </div>
          </div>
        </div>
    </>
  );
}