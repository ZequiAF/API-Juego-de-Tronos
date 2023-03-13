import React from "react";
import { useLoaderData } from "react-router-dom";
import { getQuoteByCharacter1 } from "../../../../services/gotapi";

export async function loader() {
    return getQuoteByCharacter1(document.getElementById("nombrebuscarfrasepersonaje").value);
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