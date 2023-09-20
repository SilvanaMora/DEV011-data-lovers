import data from './data/countries/countries.js';
import { renderItems } from "./view.js";


document.querySelector("#inicio").addEventListener("click", function() {
  document.querySelector("#portada").style.opacity = 0;

  
  document.querySelector("#tituloPag2").style.opacity = 1;
  document.querySelector("#contenedorDeFormulario").style.opacity = 1;
  document.querySelector("#contenedorDeFiltrado").style.opacity = 1;
  document.querySelector("#contenedorDeCartas").style.opacity = 1;
  document.querySelector("#piePagina").style.opacity = 1;
});

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

