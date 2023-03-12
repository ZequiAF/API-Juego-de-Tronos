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

//PRUEBA EN API A CAPELA
/*
const divpersonaje = document.getElementById("root");
const name =  "jon";
getCharactersByName(name)
.then(characters=>{
    characters.forEach(element => {
        var mostrar = `<div className="card2">
                            <p>Nombre: ${element.name}</p>
                            <p>Nombre: ${element.slug}</p>
                            <p>Linaje: ${element.house.slug}</p>
                            <p>Nombre de la casa: ${element.house.name}</p>
                            <p>Frases: ${element.quotes}</p>
        </div>`;
        divpersonaje.innerHTML += mostrar;
    });
});
*/

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