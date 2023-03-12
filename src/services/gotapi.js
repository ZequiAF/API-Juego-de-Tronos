//PERSONAJES
//TODOS LOS PERSNAJES --> Listar todos los personajes con sus frases
const urlCharactersAndQuotes = "https://api.gameofthronesquotes.xyz/v1/characters";
//UN PERSONAJE --> Mostrar información de 1 personaje de la serie
const urlCharacters = "https://api.gameofthronesquotes.xyz/v1/character/";

//CASAS
//TODAS LAS CASAS --> Listar todas las casas
const urlHouses = "https://api.gameofthronesquotes.xyz/v1/houses";
//CASA DE UN PERSONAJE --> Listar los miembros que pertenecen a una casa concreta
const urlHouse = " https://api.gameofthronesquotes.xyz/v1/house/";

//FRASES
//MOSTRAR UNA FRASE CUALQUIERA
const urlRandomQuote = "https://api.gameofthronesquotes.xyz/v1/random";
//FRASE ALEATORIA --> Sacar x frases cualquiera de cualquier personaje
const urlRandomQuotes = "https://api.gameofthronesquotes.xyz/v1/random/";
//Sacar x número de frases de un personaje concreto
const urlQuoteCharacter = "https://api.gameofthronesquotes.xyz/v1/author/"
//FRASES CUALQUIERA --> Sacar 1 frase cualquiera de un personaje concreto
const urlQuoteCharacter1 = "https://api.gameofthronesquotes.xyz/v1/author/"

export async function getCharactersAndQuotes() {
    const urlFetch = urlCharactersAndQuotes;
    const response = await fetch(urlFetch);
    const json = await response.json();
    return json;
}

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