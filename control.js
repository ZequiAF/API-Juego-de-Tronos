var cuerpo_personajes = document.getElementById("cuerpo_personajes");
var cuerpo_casas = document.getElementById("cuerpo_casas");
var cuerpo_frases = document.getElementById("cuerpo_frases");

function personajes_exe(){
    cuerpo_personajes.style.display="flex";
    cuerpo_casas.style.display="none";
    cuerpo_frases.style.display="none";
}
function casas_exe(){
    cuerpo_personajes.style.display="none";
    cuerpo_casas.style.display="flex";
    cuerpo_frases.style.display="none";
}
function frases_exe(){
    cuerpo_personajes.style.display="none";
    cuerpo_casas.style.display="none";
    cuerpo_frases.style.display="flex";
}

