import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

// Mostrar una frase cualquiera
export async function getRandomQuote(params) {
  let frase = await localforage.getItem("personajes");
  if (!frase) frase = [];
  if (params) {
    frase = matchSorter(frase, params, { keys: ["first", "last"] });
  }
  return frase.sort(sortBy("last", "createdAt"));
}

// Sacar x frases cualquiera de cualquier personaje
export async function getRandomQuotes(params) {
    let frases = await localforage.getItem("personaje");
    let contact = frases.find(contact => contact.params === params);
    return contact ?? null;
}

// Sacar x número de frases de un personaje concreto
export async function getQuoteByCharacter(params) {
    let xfrasespersonaje = await localforage.getItem("personaje");
    let contact = xfrasespersonaje.find(contact => contact.params === params);
    return contact ?? null;
}

// Sacar 1 frase cualquiera de un personaje concreto
export async function getQuoteByCharacter1(params) {
    let frasespersonaje = await localforage.getItem("personaje");
    let contact = frasespersonaje.find(contact => contact.params === params);
    return contact ?? null;
}