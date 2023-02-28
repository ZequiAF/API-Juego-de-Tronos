import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./error-page";

//ARREGLAR 
import Personajes,{  personajesLoader } from "./components/personajes";
import Personaje,{  personajeLoader } from "./components/personaje";
import Casas,{ casasLoader } from "./components/casas";
import Casa,{ casaLoader } from "./components/casa";
import FraseAleatoria,{ fraseLoader, } from "./components/frases";
import FrasesAleatorias,{ frasesLoader, } from "./components/xfrases";
import XFrasesPersonaje,{ xfrasespersonajeLoader, } from "./components/xfrasespersonaje";
import FrasesPersonaje,{ frasespersonajeLoader, } from "./components/frasealeatoriapersonaje";

import Root, { loader as rootLoader, action as rootAction,} from "./components/root";

//import { action as destroyAction } from "./components/destroy";

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
    <App />
  </React.StrictMode>,
)
