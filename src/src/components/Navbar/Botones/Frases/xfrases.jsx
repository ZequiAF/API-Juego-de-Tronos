import { getRandomQuotes } from "../../../../services/gotapi";
import React from "react";
import { Outlet } from "react-router-dom";

export async function loader() {
  return getRandomQuotes();
  }

export default function xfrases() {
  return (
    <>
      <div id="pruebas">
        <h1>React Router GOT </h1>
        <h5><i>XFRASES</i></h5>
        <h2>5 Frases 🗣🗣🗣🗣🗣</h2>
        <h2>8 Frases 🗣🗣🗣🗣🗣🗣🗣🗣</h2>
        <h2>Sacar x frases cualquiera de cualquier personaje</h2>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}