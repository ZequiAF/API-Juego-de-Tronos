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
import Personaje,{  loader as contactLoader, } from "./components/personajes";
import Casa,{  loader as contactLoader, } from "./components/casas";
import Frase,{  loader as contactLoader, } from "./components/frases";

import Root, { loader as rootLoader, action as rootAction,} from "./components/root";

import { action as destroyAction } from "./components/destroy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    // ARREGLAR ABAJO
    children: [
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
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
