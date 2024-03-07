import data from "./data/countries/countries.js";
import { renderItems } from "./view.js";
import { filterData, computeStats } from "./dataFunctions.js";
import { SortData } from "./dataFunctions.js";
import { BuscarPais } from "./dataFunctions.js";
//console.log(SortData(data.countries, "name"));

document.getElementById("inicio").onclick = function () {
  document.getElementById("portada").style.display = "none";
  document.getElementById("contenedorFunciones").style.display = null;
  document.getElementById("fotter").style.display = null;
  // document.getElementById("contenedorBotones").style.display = null;
};

const allData = renderItems(data.countries);
document.querySelector("#root").innerHTML = allData;

const textoBuscador = document.getElementById("textoIngresado");
const limpiar = document.getElementById("limpiar");
textoBuscador.addEventListener("keyup", pintarBuscarPais);
limpiar.addEventListener("click", limpiarTexto);

function pintarBuscarPais() {
  const resultado = BuscarPais(data.countries);
  const busqueda = renderItems(resultado);
  document.querySelector("#root").innerHTML = busqueda;
}

function limpiarTexto() {
  const inputText = document.getElementById("textoIngresado");
  const inputSelection = document.getElementById("continents");
  const inputSelectionOrden = document.getElementById("asc-desc");
  inputText.value = "";
  inputSelection.value = ""; //Establece el valor del input en una cadena vacía para borrar el texto.
  inputSelectionOrden.value = "";
  const allData1 = renderItems(data.countries);
  //console.log(data.countries);
  document.querySelector("#root").innerHTML = allData1;
  //console.log("h", 2);
}

// function BuscarPais() {

// function selectContinents () {
  


const selectContinents = document.getElementById("continents");
selectContinents.addEventListener("change", (event) => {
  const selectSort = document.getElementsByName("asc-desc")[0];
  //console.log(selectSort.value);
  const valueSelected = event.target.value;
  let newArray = [];
  const dataFilteredByContinent = filterData(
    data.countries,
    "continents",
    valueSelected
  );
  computeStats(dataFilteredByContinent)
  //console.log(valueSelected);
  if (selectSort.value !== "nada" && valueSelected) {
    newArray = SortData(dataFilteredByContinent, "name", selectSort.value);
  }

  root.innerHTML = renderItems(
    !newArray.length ? dataFilteredByContinent : newArray
  );
});

// function selectContinents () {
const root = document.getElementById("root");

const dataOrdenado = data.countries;
const selectSort = document.getElementsByName("asc-desc")[0];

selectSort.addEventListener("change", () => {
  const resultadoSort = SortData(dataOrdenado, "name", selectSort.value);
  const root = document.getElementById("root");
  const valueSelected = selectContinents.value;
  let newArray = [];
  const dataFilteredByContinent = filterData(
    data.countries,
    "continents",
    valueSelected
  );
  computeStats(dataFilteredByContinent)
  //console.log(valueSelected);
  if (valueSelected) {
    filterData(resultadoSort, "continents", valueSelected);
    newArray = SortData(dataFilteredByContinent, "name", selectSort.value);
    return (root.innerHTML = renderItems(newArray));
  }
  root.innerHTML = renderItems(resultadoSort);
  //console.log(resultadoSort);
});
