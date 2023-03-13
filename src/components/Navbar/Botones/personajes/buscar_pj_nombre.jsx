import React from "react";
import { useLoaderData } from "react-router-dom";
import { getCharactersByName } from "../../../../services/gotapi";

export async function loader() {
    return getCharactersByName(document.getElementById("nombrebuscarpersonaje").value);
}

export default function buscar_pj_nombre() {

    const resultado = useLoaderData();

    return (
        <>
            <div className="col-mx-3 col-md-4 col-sm-12">
            <div className="card2">
                                <p>Nombre: {resultado[0].name}</p>
                                <p>Nombre: {resultado[0].slug}</p>
                                <p>Linaje: {resultado[0].house.slug}</p>
                                <p>Nombre de la casa: {resultado[0].house.name}</p>
                                <p>Frases: {resultado[0].quotes}</p>
            </div>
            </div>
        </>
    );
}
