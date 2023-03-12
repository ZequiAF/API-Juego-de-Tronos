import { getCharactersAndQuotes } from "../../../../services/gotapi";
import React from "react";
import { Outlet } from "react-router-dom";

export async function loader() {
  return getCharactersAndQuotes();
  }

export default function Personajes() {
  return (
    <>
      <div id="pruebas">
        <h1>React Router GOT </h1>
        <h5><i>personajes</i></h5>
        <h2>Aquí van personajes 👨‍👩‍👧‍👦</h2>
        <h2>Listar todos los personajes con sus frases</h2>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}