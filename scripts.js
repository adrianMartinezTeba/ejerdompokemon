console.log(document.title);
const titulo = document.getElementById("gen-1");
titulo.innerText = "Generasión 1 Pokimon"
const fondocard = document.querySelector(".infocard-list")
for (const fondo of fondocard.children) {
    fondo.style.background = "#d3e7c1"
}
// let fondocard2 = document.getElementsByClassName("infocard-list")[2]
// for (const fondo2 of fondocard2.children) {
//     fondo2.style.background ="#B0E0E6"
// }

const urlpag = document.URL;
console.log(urlpag)
const dompag = document.domain;
console.log(dompag);
const fotos = document.querySelectorAll(".img-fixed")
console.log(fotos);
const sustituir = document.querySelectorAll(".img-fixed")
for (const pok of sustituir) {
    pok.setAttribute("src", "https://media.giphy.com/media/2v170e71aanfi/giphy.gif")
}
const voladores = document.getElementsByClassName("itype flying")
for (const fondo of voladores) {
    console.log(fondo)
    fondo.parentNode.parentNode.style.background="#B0E0E6"
}