import { getQuoteByCharacter } from "../../../../services/gotapi";
import React from "react";
import { Outlet } from "react-router-dom";

export async function loader() {
  return getQuoteByCharacter();
  }

export default function xfrasespersonaje() {
  return (
    <>
      <div id="pruebas">
        <h1>React Router GOT </h1>
        <h5><i>XFRASESPERSONAJE</i></h5>
        <h2>5 Frases 🗣🗣🗣🗣🗣 de capulleto 🚶‍♂️</h2>
        <h2>Sacar x número de frases de un personaje concreto</h2>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}