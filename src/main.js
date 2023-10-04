import data from "./data/countries/countries.js";
import { renderItems } from "./view.js";
import { filterData } from "./dataFunctions.js";
import { SortData } from "./dataFunctions.js";
import { BuscarPais } from "./dataFunctions.js";
import { computeStats } from "./dataFunctions.js";
import { Stats2 } from "./dataFunctions.js";



console.log(SortData(data.countries, "name"));

const datos = data.countries;
let datosFiltrados = datos;

document.getElementById("inicio").onclick = function () {
  document.getElementById("portada").style.display = "none";
  document.getElementById("contenedorFunciones").style.display = null;
  // document.getElementById("contenedorBotones").style.display = null;
};

const allData = renderItems(data.countries);
document.querySelector("#root").innerHTML = allData;

const textoBuscador = document.getElementById("textoIngresado");
const limpiar = document.getElementById("limpiar");
textoBuscador.addEventListener("keyup", pintarBuscarPais);
limpiar.addEventListener("click", limpiarTexto);

function pintarBuscarPais() {

  const resultado = BuscarPais(datosFiltrados);
  const por = document.getElementById("porcent");
  const stats = Stats2(resultado, data.countries.length);
  por.innerHTML = "Se ha mostrado el " + stats + "%  del total de los países.";
  computeStats (resultado);
 
 
  const busqueda = renderItems(resultado);
  document.querySelector("#root").innerHTML = busqueda;
}

function limpiarTexto() {
  datosFiltrados = datos;
  const inputText = document.getElementById("textoIngresado");
  const inputSelection = document.getElementById("continents");
  const inputSelectionOrden = document.getElementById("asc-desc");
  const por = document.getElementById("porcent");
  const stats = Stats2(datosFiltrados, data.countries.length);

  por.innerHTML = "Se ha mostrado el " + stats + "%  del total de los países.";
  inputText.value = "";
  inputSelection.value = "nada"; //Establece el valor del input en una cadena vacía para borrar el texto.
  inputSelectionOrden.value = "nada";
  const allData1 = renderItems(data.countries);
  console.log(data.countries);
  document.querySelector("#root").innerHTML = allData1;
  console.log("h", 2);
}

// function BuscarPais() {

// function selectContinents () {

const selectContinents = document.getElementById("continents");
selectContinents.addEventListener("change", (evt) => {
  const selectSort = document.getElementsByName("asc-desc")[0];
  console.log(selectSort.value);
  const valueSelected = evt.target.value;
  let newArray = [];
  const dataFilteredByContinent = filterData(
    data.countries,
    "continents",
    valueSelected
  );
  datosFiltrados = dataFilteredByContinent;
  const por = document.getElementById("porcent");
  const stats = Stats2(datosFiltrados, data.countries.length);
  por.innerHTML = "Se ha mostrado el " + stats + "%  del total de los países.";

  console.log(valueSelected);

  if (selectSort.value !== "nada" && valueSelected) {
    newArray = SortData(dataFilteredByContinent, "name", selectSort.value);
  }

  root.innerHTML = renderItems(
    !newArray.length ? dataFilteredByContinent : newArray
  );

  if (selectContinents.value === "nada") {
    const allData1 = renderItems(data.countries);
    document.querySelector("#root").innerHTML = allData1;
    const por = document.getElementById("porcent");
    datosFiltrados = datos;
    const stats = Stats2(datosFiltrados, data.countries.length);

    por.innerHTML =
      "Se ha mostrado el " + stats + "%  del total de los países.";
  }
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
  console.log(valueSelected);
  if (valueSelected) {
    filterData(resultadoSort, "continents", valueSelected);
    newArray = SortData(dataFilteredByContinent, "name", selectSort.value);
    return (root.innerHTML = renderItems(newArray));
  }
  root.innerHTML = renderItems(resultadoSort);
  console.log(resultadoSort);
});

//estadistica
const por = document.getElementById("porcent");
const stats = Stats2(datosFiltrados, data.countries.length);
por.innerHTML = "Se ha mostrado el " + stats + "%  del total de los países.";

computeStats(datosFiltrados);

// // Mostrar las estadísticas en el DOM
// const statsContainer = document.getElementById("estadisticas"); // Reemplaza "stats-container" con el ID de tu contenedor
// statsContainer.innerHTML = `
//   <h3>Estadísticas:</h3>
//   <p>Total de países: ${stats.totalCountries}</p>
//   <h4>Porcentaje de países por continente:</h4>
//   <ul>
//     ${Object.entries(stats.percentageByContinent)
//       .map(([continent, percentage]) => `<li>${continent}: ${percentage.toFixed(2)}%</li>`)
//       .join("")}
//   </ul>
// `;
