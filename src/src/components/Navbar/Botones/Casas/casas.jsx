import { getCharactersByHouse } from "../../../../services/gotapi";
import React from "react";
import { Outlet } from "react-router-dom";

export async function loader() {
  return getCharactersByHouse();
  }

export default function Casas() {
  return (
    <>
      <div id="pruebas">
        <h1>React Router GOT </h1>
        <h5><i>CASAS</i></h5>
        <h2>Aquí van casas 🏠🏘🏡🏚🏘</h2>
        <h2>Listar todas las casas</h2>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}