import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./error-page";

//ARREGLAR 
import Personajes,{  personajesLoader } from "../src/components/Navbar/Botones/personajes";
import Personaje,{  personajeLoader } from "../src/components/Navbar/Botones/personaje";
import Casas,{ casasLoader } from "../src/components/Navbar/Botones/casas";
import Casa,{ casaLoader } from "../src/components/Navbar/Botones/casa";
import FraseAleatoria,{ fraseLoader, } from "../src/components/Navbar/Botones/frases";
import FrasesAleatorias,{ frasesLoader, } from "../src/components/Navbar/Botones/xfrases";
import XFrasesPersonaje,{ xfrasespersonajeLoader, } from "../src/components/Navbar/Botones/xfrasespersonaje";
import FrasesPersonaje,{ frasespersonajeLoader, } from "../src/components/Navbar/Botones/frasealeatoriapersonaje";

import Root, { loader as rootLoader, action as rootAction,} from "../src/components/Navbar/Botones/root";

//import { action as destroyAction } from "../src/components/Navbar/Botones/destroy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    // ARREGLAR ABAJO destroy
    children: [
//      {
//        DESTRUIR / LIMPIAR RESULTADOS
//        path: "contacts/:limpiar/destroy",
//        action: destroyAction,
//      },
      {
        path: "components/:contactId",
        element: <Personajes />,
        loader: personajesLoader,
      },
      {
        path: "components/:contactId",
        element: <Personaje />,
        loader: personajeLoader,
      },
      {
        path: "components/:contactId",
        element: <Casas />,
        loader: casasLoader,
      },
      {
        path: "components/:contactId",
        element: <Casa />,
        loader: casaLoader,
      },
      {
        path: "components/:contactId",
        element: <FraseAleatoria />,
        loader: fraseLoader,
      },
      {
        path: "components/:contactId",
        element: <FrasesAleatorias />,
        loader: frasesLoader,
      },
      {
        path: "components/:contactId",
        element: <XFrasesPersonaje />,
        loader: xfrasespersonajeLoader,
      },
      {
        path: "components/:contactId",
        element: <FrasesPersonaje />,
        loader: frasespersonajeLoader,
      },
    ],
  },
]);

//MIRAR SI ES APP O ROUTER PROVIDER O AMBAS
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
