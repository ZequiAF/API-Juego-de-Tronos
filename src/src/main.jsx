import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Root, { loader as rootLoader, } from "./components/root";

import Personaje, {  loader as personajeLoader, } from "./components/Navbar/Botones/Personajes/personaje";
import Personajes, {  loader as personajesLoader, } from "./components/Navbar/Botones/Personajes/personajes";
import Casas, {  loader as casasLoader, } from "./components/Navbar/Botones/Casas/casas";
import Casa, {  loader as casaLoader, } from "./components/Navbar/Botones/Casas/casa";
import Frases, {  loader as frasealeatoriaLoader, } from "./components/Navbar/Botones/Frases/frases";
import XFrases, {  loader as xFrasesLoader, } from "./components/Navbar/Botones/Frases/xfrases";
import XFrasesPersonaje, {  loader as xfrasespersonajeLoader, } from "./components/Navbar/Botones/Frases/xfrasespersonaje";
import FraseAleatoriaPersonaje, {  loader as frasealeatoriapersonajeLoader, } from "./components/Navbar/Botones/Frases/frasealeatoriapersonaje";

import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "personaje/:pruebas",
        element: <Personaje />,
        loader: personajeLoader,
      },
      {
        path: "personajes/:pruebas",
        element: <Personajes />,
        loader: personajesLoader,
      },
      {
        path: "casas/:pruebas",
        element: <Casas />,
        loader: casasLoader,
      },
      {
        path: "casa/:pruebas",
        element: <Casa />,
        loader: casaLoader,
      },
      {
        path: "frases/:pruebas",
        element: <Frases />,
        loader: frasealeatoriaLoader,
      },
      {
        path: "xfrases/:pruebas",
        element: <XFrases />,
        loader: xFrasesLoader,
      },
      {
        path: "xfrasespersonaje/:pruebas",
        element: <XFrasesPersonaje />,
        loader: xfrasespersonajeLoader,
      },
      {
        path: "frasealeatoriapersonaje/:pruebas",
        element: <FraseAleatoriaPersonaje />,
        loader: frasealeatoriapersonajeLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);