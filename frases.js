import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getRandomQuote(params) {
  let frase = await localforage.getItem("personajes");
  if (!frase) frase = [];
  if (params) {
    frase = matchSorter(frase, params, { keys: ["first", "last"] });
  }
  return frase.sort(sortBy("last", "createdAt"));
}

export async function getRandomQuotes(params) {
    let frases = await localforage.getItem("personaje");
    let contact = frases.find(contact => contact.params === params);
    return contact ?? null;
}

export async function getQuoteByCharacter(params) {
    let xfrasespersonaje = await localforage.getItem("personaje");
    let contact = xfrasespersonaje.find(contact => contact.params === params);
    return contact ?? null;
}

export async function getQuoteByCharacter1(params) {
    let frasespersonaje = await localforage.getItem("personaje");
    let contact = frasespersonaje.find(contact => contact.params === params);
    return contact ?? null;
}