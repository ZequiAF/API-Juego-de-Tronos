import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

// Listar todos los personajes con sus frases
export async function getCharactersAndQuotes(params) {
  let personajes = personajes.find(contact => contact.params === params);
  if (!personajes) personajes = [];
  if (params) {
    personajes = matchSorter(personajes, params, { keys: ["first", "last"] });
  }
  return personajes.sort(sortBy("last", "createdAt"));
}

// Mostrar información de 1 personaje de la serie
export async function getCharactersByName(params) {
    let personaje = await localforage.getItem("personaje");
    let contact = personaje.find(contact => contact.params === params);
    return contact ?? null;
  }