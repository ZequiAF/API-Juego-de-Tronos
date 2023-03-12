import { getQuoteByCharacter1 } from "../../../../services/gotapi";
import React from "react";
import { Outlet } from "react-router-dom";

export async function loader() {
  const QuoteByCharacter = await getQuoteByCharacter1();
  return { QuoteByCharacter };
  }

export default function frasealeatoriapersonaje() {
  return (
    <>
      <div id="pruebas">
        <h1>React Router GOT </h1>
        <h5><i>XFRASESPERSONAJE</i></h5>
        <h2>Capulleto 🚶‍♂️ y su frase 🗣</h2>
        <h2>Sacar 1 frase cualquiera de un personaje concreto</h2>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}