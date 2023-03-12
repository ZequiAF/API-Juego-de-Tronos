import { getRandomQuote } from "../../../../services/gotapi";
import React from "react";
import { Outlet } from "react-router-dom";

export async function loader() {
  return getRandomQuote();
  }

export default function frases() {
  return (
    <>
      <div id="pruebas">
        <h1>React Router GOT </h1>
        <h5><i>FRASES</i></h5>
        <h2>Frase 🗣</h2>
        <h2>Mostrar una frase cualquiera</h2>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
  