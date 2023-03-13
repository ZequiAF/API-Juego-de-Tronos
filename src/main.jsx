import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Root, { loader as rootLoader, } from "./components/root";
import Personajes, {  loader as personajesLoader, } from "./components/Navbar/Botones/Personajes/personajes";
import Casas, {  loader as casasLoader, } from "./components/Navbar/Botones/Casas/casas";
import Frases, {  loader as frasealeatoriaLoader, } from "./components/Navbar/Botones/Frases/frases";

import Buscar_pj, {  loader as buscar_pjLoader, } from "./components/Navbar/Botones/Personajes/buscar_pj";
import Buscar_pj_nombre, {  loader as buscar_pj_nombreLoader, } from "./components/Navbar/Botones/Personajes/buscar_pj_nombre";

import Buscar_casas, {  loader as buscar_casasLoader, } from "./components/Navbar/Botones/casas/buscar_casas";
import Buscar_casa, {  loader as buscar_casaLoader, } from "./components/Navbar/Botones/casas/buscar_casa";

import Buscar_frase_aleatoria, {  loader as buscar_casa_frase_aleatoriaLoader, } from "./components/Navbar/Botones/frases/buscar_frase_aleatoria";
import Buscar_frases_aleatorias, {  loader as buscar_casa_frases_aleatoriasLoader, } from "./components/Navbar/Botones/frases/buscar_frases_aleatorias";
import Buscar_frase_pj, {  loader as buscar_frase_pjLoader, } from "./components/Navbar/Botones/frases/buscar_frase_pj";
import Buscar_frases_pj, {  loader as buscar_frases_pjLoader, } from "./components/Navbar/Botones/frases/buscar_frases_pj";

import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "personajes",
        element: <Personajes />,
        loader: personajesLoader,
        children:[
          {
            path: "buscar_pj",
            element: <Buscar_pj />,
            loader: buscar_pjLoader,
          },
          {
            path: "buscar_pj_nombre",
            element: <Buscar_pj_nombre />,
            loader: buscar_pj_nombreLoader,
          },
        ]
      },
      {
        path: "casas",
        element: <Casas />,
        loader: casasLoader,
        children:[
          {
            path: "buscar_casas",
            element: <Buscar_casas />,
            loader: buscar_casasLoader,
          },
          {
            path: "buscar_casa",
            element: <Buscar_casa />,
            loader: buscar_casaLoader,
          }
        ]
      },
      {
        path: "frases",
        element: <Frases />,
        loader: frasealeatoriaLoader,
        children:[
          {
            path: "buscar_frase_aleatoria",
            element: <Buscar_frase_aleatoria />,
            loader: buscar_casa_frase_aleatoriaLoader,
          },
          {
            path: "buscar_frases_aleatorias",
            element: <Buscar_frases_aleatorias />,
            loader: buscar_casa_frases_aleatoriasLoader,
          },
          {
            path: "buscar_frase_pj",
            element: <Buscar_frase_pj />,
            loader: buscar_frase_pjLoader,
          },
          {
            path: "buscar_frases_pj",
            element: <Buscar_frases_pj />,
            loader: buscar_frases_pjLoader,
          }
        ]
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

