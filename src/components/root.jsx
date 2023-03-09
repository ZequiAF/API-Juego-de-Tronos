//import React, { Outlet, NavLink, useLoaderData, Form, useNavigation, } from "react-router-dom";
import { Personajes } from "../components/Navbar/Botones/personajes/personajes"
import { Personaje } from "../components/Navbar/Botones/personajes/personaje";
import { Casas } from "../components/Navbar/Botones/casas/casas";
import { Casa } from "../components/Navbar/Botones/casas/casa";
import { FraseAleatoria } from "../components/Navbar/Botones/frases/frases";
import { FrasesAleatorias } from "../components/Navbar/Botones/frases/xfrases";
import { XFrasesPersonaje } from "../components/Navbar/Botones/frases/xfrasespersonaje";
import { FrasesPersonaje } from "../components/Navbar/Botones/frases/frasealeatoriapersonaje";

export async function personajesLoader() {
  const CharactersAndQuotes = await Personajes();
  return { CharactersAndQuotes };
}

export async function personajeLoader() {
  const characterByName = await Personaje();
  return { characterByName };
}

export async function casaLoader() {
  const charactersByHouse = await Casas();
  return { charactersByHouse };
}

export async function casasLoader() {
  const charactersByHouse = await Casa();
  return { charactersByHouse };
}

export async function fraseLoader() {
  const RandomQuote = await FraseAleatoria();
  return { RandomQuote };
}

export async function frasesLoader() {
  const RandomQuotes = await FrasesAleatorias();
  return { RandomQuotes };
}

export async function xfrasespersonajeLoader() {
  const quoteByCharacter = await XFrasesPersonaje();
  return { quoteByCharacter };
}

export async function frasespersonajeLoader() {
  const quoteByCharacter1 = await FrasesPersonaje();
  return { quoteByCharacter1 };
}


/*export function Root() {
  const { contacts } = useLoaderData();
  const navigation = useNavigation();
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                          ? "pending"
                          : ""
                    }
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail" className={
        navigation.state === "loading" ? "loading" : ""
      }
      >
        <Outlet />
      </div>
    </>
  );
}
*/