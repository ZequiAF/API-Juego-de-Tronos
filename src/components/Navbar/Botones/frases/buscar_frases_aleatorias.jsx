import React from "react";
import { useLoaderData } from "react-router-dom";
import { getRandomQuotes } from "../../../../services/gotapi";

export async function loader() {
    return getRandomQuotes(document.getElementById("numerofrasealeatoria").value);
}

export default function buscar_frase_aleatoria() {

    const resultado = useLoaderData();

    return (
        <>
            <div className="col-12">
                {resultado.map(({ sentence, character }) =>
                    <div key="">
                        <p>{sentence}</p>
                        <p>- {character.name}</p>
                    </div>
                )}
            </div>
        </>
    );
}