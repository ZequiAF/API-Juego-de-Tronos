import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./error-page";

//ARREGLAR 
import Personajes,{  personajesLoader } from "./components/Navbar/Botones/personajes/personajes";
import Personaje,{  personajeLoader } from "./components/Navbar/Botones/personajes/personaje";
import Casas,{ casasLoader } from "../src/components/Navbar/Botones/casas/casas";
import Casa,{ casaLoader } from "./components/Navbar/Botones/casas/casa";
import FraseAleatoria,{ fraseLoader, } from "../src/components/Navbar/Botones/frases/frases";
import FrasesAleatorias,{ frasesLoader, } from "../src/components/Navbar/Botones/frases/xfrases";
import XFrasesPersonaje,{ xfrasespersonajeLoader, } from "../src/components/Navbar/Botones/frases/xfrasespersonaje";
import FrasesPersonaje,{ frasespersonajeLoader, } from "./components/Navbar/Botones/frases/frasealeatoriapersonaje";

import Root, { loader as rootLoader, action as rootAction,} from "../src/components/root";

//import { action as destroyAction } from "../src/components/Navbar/Botones/destroy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    /* 
     * ARREGLAR:
     * 1) PATH de TODOS los children
     * 2) destroy --> ESTO BORRA RESULTADO
     *  
     */
    children: [
      // PERSONAJES
      // Listar todos los personajes con sus frases
      {
        path: "/",
        element: <Personajes />,
        loader: personajesLoader,
      },
      // Mostrar información de 1 personaje de la serie
      {
        path: "/",
        element: <Personaje />,
        loader: personajeLoader,
      },

      // CASAS
      // Listar todas las casas
      {
        path: "/",
        element: <Casas />,
        loader: casasLoader,
      },
      // Listar los miembros que pertenecen a una casa concreta
      {
        path: "/",
        element: <Casa />,
        loader: casaLoader,
      },

      // FRASES
      // Mostrar una frase cualquiera
      {
        path: "/",
        element: <FraseAleatoria />,
        loader: fraseLoader,
      },
      // Sacar x frases cualquiera de cualquier personaje
      {
        path: "/",
        element: <FrasesAleatorias />,
        loader: frasesLoader,
      },
      // Sacar x número de frases de un personaje concreto
      {
        path: "/",
        element: <XFrasesPersonaje />,
        loader: xfrasespersonajeLoader,
      },
      // Sacar 1 frase cualquiera de un personaje concreto
      {
        path: "/",
        element: <FrasesPersonaje />,
        loader: frasespersonajeLoader,
      },
// {
//        DESTRUIR / LIMPIAR RESULTADOS
//        path: "contacts/:limpiar/destroy",
//        action: destroyAction,
//      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
