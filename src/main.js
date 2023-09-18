import data from './data/countries/countries.js';
import { renderItems } from "./view.js";

const allData = renderItems(data.countries)
document.querySelector('#root').innerHTML = allData
console.log('hola mundo', );

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

