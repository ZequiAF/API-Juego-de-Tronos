import React from "react";
import { useLoaderData } from "react-router-dom";
import { getCharactersAndQuotes } from "../../../../services/gotapi";

export async function loader() {
    return getCharactersAndQuotes();
}

export default function buscar_pj() {

    const resultado = useLoaderData();

    return (
        <>
            {resultado.map(({ name, slug, quotes }) =>
                <div className="col-6">
                    <p>Nombre: {name}</p>
                    <p>Nombre: {slug}</p>
                    <p>Frases: {quotes}</p>
                </div>
            )}
        </>
    );
}
