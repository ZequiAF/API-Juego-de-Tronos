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

//Easter Eggs
var arriba1 = false;
var arriba2 = false;
var abajo1 = false;
var abajo2 = false;
var izquierda1 = false;
var derecha1 = false;
var izquierda2 = false;
var derecha2 = false;
var teclab = false;
var teclaa = false;
var ck = false;
document.onkeydown = function (e) {
    if (ck == false) {
        if (e.keyCode == 38 && arriba1 == false) {
            arriba1 = true;
        } else if (e.keyCode == 38 && arriba2 == false && arriba1 == true) {
            arriba2 = true;
        } else if (e.keyCode == 40 && abajo1 == false && arriba1 == true && arriba2 == true) {
            abajo1 = true;
        } else if (e.keyCode == 40 && abajo2 == false && arriba1 == true && arriba2 == true && abajo1 == true) {
            abajo2 = true;
        } else if (e.keyCode == 37 && izquierda1 == false && arriba1 == true && arriba2 == true && abajo1 == true && abajo2) {
            izquierda1 = true;
        } else if (e.keyCode == 39 && derecha1 == false && arriba1 == true && arriba2 == true && abajo1 == true && abajo2 && izquierda1 == true) {
            derecha1 = true;
        } else if (e.keyCode == 37 && izquierda2 == false && arriba1 == true && arriba2 == true && abajo1 == true && abajo2 && izquierda1 == true && derecha1 == true) {
            izquierda2 = true;
        } else if (e.keyCode == 39 && derecha2 == false && arriba1 == true && arriba2 == true && abajo1 == true && abajo2 && izquierda1 == true && derecha1 == true && izquierda2 == true) {
            derecha2 = true;
        } else if (e.keyCode == 66 && teclab == false && arriba1 == true && arriba2 == true && abajo1 == true && abajo2 && izquierda1 == true && derecha1 == true && izquierda2 == true && derecha2 == true) {
            teclab = true;
        } else if (e.keyCode == 65 && teclaa == false && arriba1 == true && arriba2 == true && abajo1 == true && abajo2 && izquierda1 == true && derecha1 == true && izquierda2 == true && derecha2 == true && teclab == true) {
            teclaa = true;
            ck = true;
            console.log("Codigo Konami")
            window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        } else {
            arriba1 = false;
            arriba2 = false;
            abajo1 = false;
            abajo2 = false;
            izquierda1 = false;
            derecha1 = false;
            izquierda2 = false;
            derecha2 = false;
            teclab = false;
            teclaa = false;
        }
    }
};