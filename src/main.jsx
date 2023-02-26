import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./error-page";

//ARREGLAR RUTAS
import Personaje,{  loader as personajeLoader, } from "./components/personajes";
import Casa,{  loader as casaLoader, } from "./components/casas";
import Frase,{  loader as fraseLoader, } from "./components/frases";

import Root, { loader as rootLoader, action as rootAction,} from "./components/root";

import { action as destroyAction } from "./components/destroy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    // ARREGLAR ABAJO destroy
    children: [
      {
        path: "contacts/:limpiar/destroy",
        action: destroyAction,
      },
      {
        path: "components/:contactId",
        element: <Casa />,
        loader: casaLoader,
      },
      {
        path: "components/:contactId",
        element: <Personaje />,
        loader: personajeLoader,
      },
      {
        path: "components/:contactId",
        element: <Frase />,
        loader: fraseLoader,
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
