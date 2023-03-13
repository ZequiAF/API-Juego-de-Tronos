import React from "react";
import { useLoaderData } from "react-router-dom";
import { getRandomQuote } from "../../../../services/gotapi";

export async function loader() {
    return getRandomQuote();
}

export default function buscar_frase_aleatoria() {

    const resultado = useLoaderData();

    return (
        <>
            <div>
                <p>{resultado.sentence}</p>
                <p>- {resultado.character.name}</p>
            </div>
        </>
    );
}