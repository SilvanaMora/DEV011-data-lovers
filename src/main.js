import data from './data/countries/countries.js';
import { renderItems } from "./view.js";



document.getElementById("inicio").onclick = function(){
  document.getElementById("portada").style.display = "none";
	document.getElementById("contenedorFunciones").style.display = null;
  document.getElementById("fotter").style.display = null;
  document.getElementById("contenedorBotones").style.display = null;

}

const allData = renderItems(data.countries)
document.querySelector('#root').innerHTML = allData


const textoBuscador = document.getElementById("textoIngresado");
textoBuscador.addEventListener("keyup", BuscarPais);


const botonLimpiar = document.getElementById("limpiar");
botonLimpiar.addEventListener("click", limpiarTexto);
function limpiarTexto() {
  inputText.value = ""; // Establece el valor del input en una cadena vacía para borrar el texto.
}

document.getElementById("textoIngresado")[0].onkeyup = function(){
  let text1 = document.getElementsById("textoIngresado")[0].value;
 BuscarPais.getbuscarPais (text1);
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
  


 

