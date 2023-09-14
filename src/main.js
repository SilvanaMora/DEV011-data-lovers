// import data from './data/countries/countries.js';
// import {sortData, filtrar,filtrar1, calcular} from "./dataFunctions.js";
// import {renderItems} from './view.js';
// console.log(data);

const inputText = document.getElementById("textoIngresado");

const botonBuscar = document.getElementById("Buscar");
botonBuscar.addEventListener("click", buscarPais);
function buscarPais() {
  inputText.value = "";
}
const botonLimpiar = document.getElementById("Limpiar");
botonLimpiar.addEventListener("click", limpiarTexto);
function limpiarTexto() {
  inputText.value = ""; // Establece el valor del input en una cadena vacía para borrar el texto.
}


