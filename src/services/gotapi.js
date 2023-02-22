/*
 * EJEMPLO POKEAPI
 *
 * const URL_POKE = "https://pokeapi.co/api/v2/pokemon?limit=500";
 *
 * //función que devuelve todos los pokemons de la API
 * export async function getPokes(){
 * let data = await fetch(URL_POKE);
 * let pokes = await data.json();
 * console.log(pokes);
 * return pokes.results;
 *
 * }
 * 
 */

const urlCharacters = "https://api.gameofthronesquotes.xyz/v1/character/";
const urlHouses = "https://api.gameofthronesquotes.xyz/v1/houses";
const urlQuoteCharacter = "https://api.gameofthronesquotes.xyz/v1/author/"
const urlQuoteCharacter1 = "https://api.gameofthronesquotes.xyz/v1/author/"
const urlCharactersAndQuotes = "https://api.gameofthronesquotes.xyz/v1/characters";
const urlHouse = " https://api.gameofthronesquotes.xyz/v1/house/";
const urlRandomQuote = "https://api.gameofthronesquotes.xyz/v1/random";
const urlRandomQuotes = "https://api.gameofthronesquotes.xyz/v1/random/";

export async function getCharactersByName(name) {
    const urlFetch = urlCharacters + name;
    const response = await fetch(urlFetch);
    const json = await response.json();
    return json;
}

export async function getCharactersByHouse() {
    const urlFetch = urlHouses;
    const response = await fetch(urlFetch);
    const json = await response.json();
    return json;
}

export async function getQuoteByCharacter(name, numero) {
    const urlFetch = urlQuoteCharacter + name + "/" + numero;
    const response = await fetch(urlFetch);
    const json = await response.json();
    return json;
}

export async function getQuoteByCharacter1(name) {
    const urlFetch = urlQuoteCharacter1 + name + "/1";
    const response = await fetch(urlFetch);
    const json = await response.json();
    return json;
}

export async function getCharactersAndQuotes() {
    const urlFetch = urlCharactersAndQuotes;
    const response = await fetch(urlFetch);
    const json = await response.json();
    return json;
}

export async function getHouseBySlug(slug) {
    const urlFetch = urlHouse + slug;
    const response = await fetch(urlFetch);
    const json = await response.json();
    return json;
}

export async function getRandomQuote() {
    const urlFetch = urlRandomQuote;
    const response = await fetch(urlFetch);
    const json = await response.json();
    return json;
}

export async function getRandomQuotes(numero) {
    const urlFetch = urlRandomQuotes + numero;
    const response = await fetch(urlFetch);
    const json = await response.json();
    return json;
}