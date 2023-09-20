import data from './data/countries/countries.js';
import { renderItems } from "./view.js";


document.getElementById ("inicio").onclick = function () {
 document.getElementById("portada2").style.display = "none";
 document.getElementById("portada").style.display = "null";
 document.getElementById("contenedorFunciones").style.display = "null";
 document.getElementById("fotter").style.display = "null";
}

const allData = renderItems(data.countries)
document.querySelector('#root').innerHTML = allData


const inputText = document.getElementById("textoIngresado");

const botonBuscar = document.getElementById("buscar");
botonBuscar.addEventListener("click", buscarPais);

function buscarPais() {
  inputText.value = "";
}
const botonLimpiar = document.getElementById("limpiar");
botonLimpiar.addEventListener("click", limpiarTexto);
function limpiarTexto() {
  inputText.value = ""; // Establece el valor del input en una cadena vacía para borrar el texto.
}

