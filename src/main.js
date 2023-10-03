import data from "./data/countries/countries.js";
import { filterData } from "./dataFunctions.js";
import { sortData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
console.log(sortData(data.countries, "name"));

document.getElementById("inicio").onclick = function () {
  document.getElementById("portada").style.display = "none";
  document.getElementById("contenedorFunciones").style.display = null;
  document.getElementById("fotter").style.display = null;
};

const allData = renderItems(data.countries);
const root = document.querySelector("#root");
root.innerHTML = allData;

const inputText = document.getElementById("textoIngresado");

//const btnBuscar = document.querySelector("#buscar")

// const botonBuscar = document.getElementById("buscar");
// botonBuscar.addEventListener("click", buscarPais);

//function buscarPais() {
//inputText.value = "";
//}

const botonLimpiar = document.getElementById("limpiar");
botonLimpiar.addEventListener("click", limpiarTexto);
function limpiarTexto() {
  inputText.value = ""; // Establece el valor del input en una cadena vacía para borrar el texto.
}

const selectContinents = document.getElementById("continents");
selectContinents.addEventListener("change", (event) => {
  console.log(event.target.value, data);
  const valueSelected = event.target.value;
  const dataFilteredBycontinent = filterData(
    data.countries,
    "continents",
    valueSelected
  );
  root.innerHTML = renderItems(dataFilteredBycontinent);
});

//const order = document.getElementById("orden-ascendete");
//selectOrder.addEventListener("change", (event) => {
//console.log(event.target.value, data);
//const valueSelected = event.target.value;
//const dataSortBycommon = sortData(data.countries.name "common", valueSelected
//);
//root.innerHTML = renderItems(dataSortBycommon);
//});

const selectOrdenar = document.getElementById("orden");
selectOrdenar.addEventListener("change", () => {
  const sortOrder = selectOrdenar.value;
  console.log(sortOrder);

  // Ordena los datos.
  const sortedData = sortData(data.countries.name, "common", sortOrder);

  // Carga los elementos de tarjetas ordenados.
  if (sortedData) {
    root.innerHTML = "";
    root.innerHTML=renderItems(sortedData)
    //sortedData.forEach((a, b) => {
      //root.appendChild(renderItems(a, b));
    //});
  }
});


