import { getCharactersByName } from "../../../../services/gotapi";
import React from "react";
import { Outlet } from "react-router-dom";

export async function loader() {
  const characterByName = await getCharactersByName();
  return { characterByName };
}

export default function Personaje() {
  return (
    <>
      <div id="pruebas">
        <h1>React Router GOT </h1>
        <h5><i>personaje</i></h5>
        <h2>Aquí va 1 personaje 🚶‍♂️</h2>
        <h2>Mostrar información de 1 personaje de la serie</h2>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}