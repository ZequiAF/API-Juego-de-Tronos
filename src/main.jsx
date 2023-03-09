import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./error-page";

//ARREGLAR 
import Personajes from "./components/Navbar/Botones/personajes/personajes";
import Personaje from "./components/Navbar/Botones/personajes/personaje";
import Casas from "../src/components/Navbar/Botones/casas/casas";
import Casa from "./components/Navbar/Botones/casas/casa";
import FraseAleatoria from "../src/components/Navbar/Botones/frases/frases";
import FrasesAleatorias from "../src/components/Navbar/Botones/frases/xfrases";
import XFrasesPersonaje from "../src/components/Navbar/Botones/frases/xfrasespersonaje";
import FrasesPersonaje from "./components/Navbar/Botones/frases/frasealeatoriapersonaje";

import Root, { personajesLoader, personajeLoader, casasLoader, casaLoader, fraseLoader, frasesLoader, xfrasespersonajeLoader, frasespersonajeLoader, loader as rootLoader, action as rootAction,} from "../src/components/root";

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
        path: "personajes",
        element: <Personajes />,
        loader: personajesLoader,
      },
      // Mostrar información de 1 personaje de la serie
      {
        path: "personaje/:name",
        element: <Personaje />,
        loader: personajeLoader,
      },

      // CASAS
      // Listar todas las casas
      {
        path: "casas",
        element: <Casas />,
        loader: casasLoader,
      },
      // Listar los miembros que pertenecen a una casa concreta
      {
        path: "casa/:house",
        element: <Casa />,
        loader: casaLoader,
      },

      // FRASES
      // Mostrar una frase cualquiera
      {
        path: "frases/:frases",
        element: <FraseAleatoria />,
        loader: fraseLoader,
      },
      // Sacar x frases cualquiera de cualquier personaje
      {
        path: "xfrases/:numero",
        element: <FrasesAleatorias />,
        loader: frasesLoader,
      },
      // Sacar x número de frases de un personaje concreto
      {
        path: "xfrasespersonaje/:nombreynumero",
        element: <XFrasesPersonaje />,
        loader: xfrasespersonajeLoader,
      },
      // Sacar 1 frase cualquiera de un personaje concreto
      {
        path: "frasealeatoriapersonaje/:name",
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
