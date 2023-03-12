import { getHouseBySlug } from "../../../../services/gotapi";
import React from "react";
import { Outlet } from "react-router-dom";

export async function loader() {
  return getHouseBySlug();
  }

export default function Casa() {
  return (
    <>
      <div id="pruebas">
        <h1>React Router GOT </h1>
        <h5><i>CASA</i></h5>
        <h2>Aquí va una casa 🏠</h2>
        <h2>Listar los miembros que pertenecen a una casa concreta</h2>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}