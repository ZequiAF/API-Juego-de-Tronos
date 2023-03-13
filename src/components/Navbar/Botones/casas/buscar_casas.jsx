import React from "react";
import { useLoaderData } from "react-router-dom";
import { getCharactersByHouse } from "../../../../services/gotapi";

export async function loader() {
    return getCharactersByHouse();
}

export default function buscar_casas() {

    const resultado = useLoaderData();

    return (
        <>
            {resultado.map(({ name, slug, members }) =>
                    <div key="" className="col-6">
                        <p>Nombre: {name}</p>
                        <p>Nombre: {slug}</p>
                        <p>Members:
                            <ul>
                                {members.map(({ name, slug }) =>
                                    <li key="">
                                        {name}
                                        {slug}
                                    </li>
                                )}
                            </ul>
                        </p>
                    </div>
                )}
        </>
    );
}
