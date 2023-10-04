export function SortData(data, sortBy, sortOrder) {
  const ordenDeDatos = [...data];
  ordenDeDatos.sort((a, b) => {
    if (sortOrder === "asc") {
      if (a[sortBy].common < b[sortBy].common) {
        return -1;
      }
      if (a[sortBy].common > b[sortBy].common) {
        return 1;
      }
      // return 0; // En caso de que no se pueda determinar el orden
    } else if (sortOrder === "desc") {
      if (a[sortBy].common > b[sortBy].common) {
        return -1;
      }
      if (a[sortBy].common < b[sortBy].common) {
        return 1;
      } //return 0; // En caso de que no se pueda determinar el orden
    }
  });

  console.log(ordenDeDatos);
  return ordenDeDatos;
}

// function BuscarPais() {}

export const BuscarPais = (data) => {
  const inputText = document
    .getElementById("textoIngresado")
    .value.toUpperCase();
  console.log(inputText);
  const resultado = data.filter((word) =>
    word.name.common.toUpperCase().includes(inputText)
  );
  return resultado;
};
export function filterData(data, filterBy, selectedValue) {
  const filteredData = data.filter((pais) => {
    return pais[filterBy].includes(selectedValue);
  });
  console.log(filteredData);
  computeStats(filteredData);
  return filteredData;
}

export const Stats2 = (data, inventarioPaises) => {
  const mapeo = data.map((ex) => {
    return ex.name.common;
  });
  const copiaStats2 = data;
  const porcentaje = (copiaStats2.length * 100) / inventarioPaises;
  const porcenS = porcentaje.toString ();
  const porcenC = parseInt(porcenS, 10);
  console.log(mapeo);
  return porcenC.toFixed(2);
};

export const computeStats = (filteredData) => {
  //recibe los datos ya filtrados por continente
  const dataCopia = filteredData; //se crea copia de los datos
  const sumaArea = dataCopia.reduce((acumulador, pais) => {
    // con reduce suma ela rea de todos los paises
    return acumulador + pais.area;
  }, 0);
  const promedioArea = sumaArea / dataCopia.length; //saca promedio
  addHtmlestadisticas(promedioArea); //llamamos a la funcion para insertar HTML y pasamos el valor del pormedio
};

function addHtmlestadisticas(datosPromedio) {
  //recibe el valor del promedio del area de los paises
  const sectionStats = document.getElementById("porcentajeArea"); //selecciona la seccion donde insertar HTML
  eliminarHtml(sectionStats); //elimina HTML si esta previamente creado
  const p = document.createElement("p"); //creamos el parrafo para insertar en la seccion
  p.id = "parrafoStats";
  p.innerText =
    "El área del continente seleccionado es de: " +
    datosPromedio.toFixed(2) +
    " kilómetros cuadrados.";
  p.classList.add("centrado"); //le asignamos la clase al parrafo
  sectionStats.appendChild(p); //le agregamos a la seccion el parrafo
}

function eliminarHtml(section) {
  while (section.firstChild) {
    //eliminamos HTML previamente cargado
    section.removeChild(section.firstChild);
  }
}

//   // Calcula el número total de países en tu base de datos
//   const copiadoData = data.countries.slice();
//   const totalPaises = copiadoData.length;

//   // Agrupa los países por continente y cuenta cuántos hay en cada continente
//   const paisesPorContinente = copiadoData.reduce((accumulator, country) => {
//     const continents = country.continents[0]; // Suponemos que cada país tiene un solo continente
//     accumulator[continents] = (accumulator[continents] || 0) + 1;
//     return accumulator;
//   }, {});
//   // Calcula el porcentaje de países por continente
//   const porcentajePorContinente = {};
//   for (const continents in paisesPorContinente) {
//     const cantidad = paisesPorContinente[continents];
//     const porcentaje = (cantidad / totalPaises) * 100;
//     porcentajePorContinente[continents] = porcentaje;
//   }

//   return {
//     totalCountries: totalPaises,
//     percentageByContinent: porcentajePorContinente,
//   };
// };
