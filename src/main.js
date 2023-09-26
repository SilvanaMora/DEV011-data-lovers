

import data from './data/countries/countries.js';
import { renderItems } from "./view.js";
import { filterData } from "./dataFunctions.js";



document.getElementById("inicio").onclick = function(){
  document.getElementById("portada").style.display = "none";
	document.getElementById("contenedorFunciones").style.display = null;
  document.getElementById("fotter").style.display = null;
  // document.getElementById("contenedorBotones").style.display = null;

}

const allData = renderItems(data.countries)
document.querySelector('#root').innerHTML = allData


const textoBuscador = document.getElementById("textoIngresado");
textoBuscador.addEventListener("keyup", BuscarPais);


const botonLimpiar = document.getElementById("limpiar");
const inputText = document.getElementById("textoIngresado"); 
botonLimpiar.addEventListener ("click", function() {
limpiarTexto (inputText);// Establece el valor del input en una cadena vacía para borrar el texto.
});

function limpiarTexto(input) { // Acepta input como parámetro
  input.value = ""; // Establece el valor del input en una cadena vacía para borrar el texto.
}







document.getElementById("textoIngresado").onkeyup = function(){
  let text1 = document.getElementById("textoIngresado").value;
 BuscarPais(text1);
}

// function BuscarPais() {

function BuscarPais ()  {

    let inputText = document.getElementById("textoIngresado").value.toUpperCase();
    console.log(inputText);
    const resultado = data.countries.filter((word) => word.name.common.toUpperCase().includes(inputText));
  
    console.log(resultado);
  const busqueda = renderItems(resultado);
  document.querySelector('#root').innerHTML = busqueda;
  }


// function selectContinents () {

  const selectContinents = document.getElementById("continents");
  selectContinents.addEventListener("change", (event) => {
    console.log(event.target.value, data);
    const valueSelected = event.target.value;
    const dataFilteredByContinent = filterData(
      data.countries,
      "continents",
      valueSelected
    );
    root.innerHTML = renderItems(dataFilteredByContinent);
  });