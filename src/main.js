

import data from './data/countries/countries.js';
import { renderItems } from "./view.js";
import { filterData } from "./dataFunctions.js";
import { sortData } from "./dataFunctions.js";
import { BuscarPais } from "./dataFunctions.js";
console.log(sortData(data.countries, "name"));

document.getElementById("inicio").onclick = function(){
  document.getElementById("portada").style.display = "none";
	document.getElementById("contenedorFunciones").style.display = null;
  document.getElementById("fotter").style.display = null;
  // document.getElementById("contenedorBotones").style.display = null;
}

const allData = renderItems(data.countries);
document.querySelector('#root').innerHTML = allData;

const textoBuscador = document.getElementById("textoIngresado");
textoBuscador.addEventListener("keyup", pintarBuscarPais);
limpiar.addEventListener("click", limpiarTexto);


function pintarBuscarPais (){
const resultado = BuscarPais (data.countries);
const busqueda = renderItems(resultado);
document.querySelector('#root').innerHTML = busqueda;
}

function limpiarTexto() { 
    let inputText = document.getElementById("textoIngresado");
    let inputSelection = document.getElementById("continents");
    inputText.value = ""; 
    inputSelection.value = "nada";//Establece el valor del input en una cadena vacía para borrar el texto.
    const allData1 = renderItems (data.countries);
    document.querySelector('#root').innerHTML = allData1;
    console.log ('h',2);
    };
 

// function BuscarPais() {


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

  // function selectContinents () {
    const root = document.getElementById("root");

