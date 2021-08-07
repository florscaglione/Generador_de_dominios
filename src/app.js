/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function generadorDominios(element) {};

let domainNames = [];
let pronombres = ["the", "our"];
let adjetivos = ["great", "big"];
let sustantivos = ["jogger", "racoon"];
let extensiones = [".com", ".es"];

for (let a = 0; a < pronombres.length; a++) {
  let pronombre = pronombres[a];

  for (let b = 0; b < adjetivos.length; b++) {
    let adjetivo = adjetivos[b];

    for (let c = 0; c < sustantivos.length; c++) {
      let sustantivo = sustantivos[c];

      for (let d = 0; d < extensiones.length; d++) {
        let extension = extensiones[d];

        domainNames.push(pronombre + adjetivo + sustantivo + extension);
      }
    }
  }
}

console.log(domainNames);
