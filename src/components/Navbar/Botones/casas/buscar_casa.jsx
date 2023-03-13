import React from "react";
import { useLoaderData } from "react-router-dom";
import { getHouseBySlug } from "../../../../services/gotapi";

export async function loader() {
    return getHouseBySlug(document.getElementById("nombrebuscarcasa").value);
}

export default function buscar_casa() {

    const resultado = useLoaderData();

    return (
        <>
            <div className="col-mx-3 col-md-4 col-sm-12">
                <div className="card2">
                    <p>Nombre: {resultado[0].name}</p>
                    <p>Nombre: {resultado[0].slug}</p>
                    <ul>Members:
                        {(resultado[0].members).map(({ name, slug }) =>
                            <li>
                                {name}
                                {slug}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}
