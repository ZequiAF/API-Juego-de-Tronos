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
            var url = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c638dc3d-fb1e-4774-b982-3b4bcd4bf834/deootv8-a9b037ed-8c10-4a92-98bd-fae70f102995.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M2MzhkYzNkLWZiMWUtNDc3NC1iOTgyLTNiNGJjZDRiZjgzNFwvZGVvb3R2OC1hOWIwMzdlZC04YzEwLTRhOTItOThiZC1mYWU3MGYxMDI5OTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Zw0okretvh0ihaGl3aqkbq0jE_PHGRcwjLGnLkWTzhw";
            document.body.style.backgroundImage = `url(${url})`;
            document.body.style.color = "rgb(254 255 208)";
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