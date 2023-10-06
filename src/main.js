import data from "./data/countries/countries.js";
import { renderItems } from "./view.js";
import { filterData } from "./dataFunctions.js";
import { SortData } from "./dataFunctions.js";
import { BuscarPais } from "./dataFunctions.js";
import { computeStats } from "./dataFunctions.js";
import { Stats2 } from "./dataFunctions.js";

const datos = data.countries;
let datosFiltrados = datos;
console.log(SortData(data.countries, "name"));

document.getElementById("inicio").onclick = function () {
  document.getElementById("portada").style.display = "none";
  document.getElementById("contenedorFunciones").style.display = null;
  // document.getElementById("contenedorBotones").style.display = null;
};

const allData = renderItems(data.countries);
document.querySelector("#root").appendChild(allData);

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
  document.querySelector("#root").innerHTML = ''
  document.querySelector("#root").appendChild(busqueda);
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
  document.querySelector("#root").innerHTML = ''
  document.querySelector("#root").appendChild(allData1)
  console.log("h", 2);
}



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

  root.innerHTML = ''
  root.appendChild(renderItems(
    !newArray.length ? dataFilteredByContinent : newArray
  ));

  if (selectContinents.value === "nada") {
    const allData1 = renderItems(data.countries);
    document.querySelector("#root").innerHTML = ''
    document.querySelector("#root").appendChild(allData1);
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
  root.innerHTML = ''
  root.appendChild(renderItems(resultadoSort))
  if (valueSelected != "nada") {
    filterData(resultadoSort, "continents", valueSelected );
    newArray = SortData(dataFilteredByContinent, "name", selectSort.value);
    root.innerHTML = ''
    return (root.appendChild(renderItems(newArray)));
  }
  root.innerHTML = ''
  root.appendChild(renderItems(resultadoSort));
  console.log(resultadoSort);
});

//estadistica
const por = document.getElementById("porcent");
const stats = Stats2(datosFiltrados, data.countries.length);
por.innerHTML = "Se ha mostrado el " + stats + "%  del total de los países.";

computeStats(datosFiltrados);


