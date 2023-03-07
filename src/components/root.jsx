import React, { Outlet, NavLink, useLoaderData, Form, useNavigation, } from "react-router-dom";
import { getCharactersAndQuotes } from "../components/Navbar/Botones/personaje";
import { getCharactersByName } from "../components/Navbar/Botones/personajes";
import { getCharactersByHouse } from "../components/Navbar/Botones/casas";
import { getHouseBySlug } from "../components/Navbar/Botones/casa";
import { getRandomQuote } from "../components/Navbar/Botones/frases";
import { getRandomQuotes } from "../components/Navbar/Botones/xfrases";
import { getQuoteByCharacter } from "../components/Navbar/Botones/xfrasespersonaje";
import { getQuoteByCharacter1 } from "../components/Navbar/Botones/frasealeatoriapersonaje";

export async function personajesLoader() {
  const CharactersAndQuotes = await getCharactersAndQuotes();
  return { CharactersAndQuotes };
}

export async function personajeLoader() {
  const characterByName = await getCharactersByName();
  return { characterByName };
}

export async function casaLoader() {
  const charactersByHouse = await getCharactersByHouse();
  return { charactersByHouse };
}

export async function casasLoader() {
  const charactersByHouse = await getHouseBySlug();
  return { charactersByHouse };
}

export async function fraseLoader() {
  const RandomQuote = await getRandomQuote();
  return { RandomQuote };
}

export async function frasesLoader() {
  const RandomQuotes = await getRandomQuotes();
  return { RandomQuotes };
}

export async function xfrasespersonajeLoader() {
  const quoteByCharacter = await getQuoteByCharacter();
  return { quoteByCharacter };
}

export async function frasespersonajeLoader() {
  const quoteByCharacter1 = await getQuoteByCharacter1();
  return { quoteByCharacter1 };
}


export default function Root() {
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