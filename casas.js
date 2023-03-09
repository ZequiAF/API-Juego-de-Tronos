import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

// Listar todas las casas
export async function getCharactersByHouse(params) {
  let casa = await localforage.getItem("personajes");
  if (!casa) casa = [];
  if (params) {
    casa = matchSorter(casa, params, { keys: ["first", "last"] });
  }
  return casa.sort(sortBy("last", "createdAt"));
}

// Listar los miembros que pertenecen a una casa concreta
export async function getHouseBySlug(params) {
    let casas = await localforage.getItem("personaje");
    let contact = casas.find(contact => contact.params === params);
    return contact ?? null;
  }