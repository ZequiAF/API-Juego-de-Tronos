import React from "react";
import { getCharactersByName } from "../services/gotapi";
import { Outlet } from "react-router-dom";

export async function loader() {
  const characterByName = await getCharactersByName();
  return { characterByName };
}

export default function Root() {
  return (
    <>
      <div id="pruebaderoot">
        <h1>React Router GOT </h1>
        <h5><i>ROOT</i></h5>
        <h2>Estimado Saecio:</h2>
        <h2>Aquí va el programa principal, es como el header</h2>
        <h2><b>Lo que pongas aquí aparece en todas las páginas</b></h2>
        <br></br>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}