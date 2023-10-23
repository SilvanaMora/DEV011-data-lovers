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

  //console.log(ordenDeDatos);
  return ordenDeDatos;
}

// function BuscarPais() {}

export const BuscarPais = (data) => {
  const inputText = document
    .getElementById("textoIngresado")
    .value.toUpperCase();
  //console.log(inputText);
  const resultado = data.filter((word) =>
    word.name.common.toUpperCase().includes(inputText)
  );
  return resultado;
};

let newData = [];
export function filterData(data, filterBy, selectedValue) {
  const filteredData = data.filter((pais) => {
    return pais[filterBy].includes(selectedValue);
  });
  // console.log(filteredData);
  computeStats(filteredData); //para que haga el calculo con la data filtrada
  newData = filteredData
  return filteredData;
}

//export const anotherExample = () => {
//return [];
//};

// function Porcentajes de continentes

export const computeStats = () => {
  //recibe los datos ya filtrados por continente
  const dataCopia = newData;
  const sumaArea = dataCopia.reduce((acumulador, pais) => {
    // con reduce suma ela rea de todos los paises
    return acumulador + pais.area;
  }, 0);
  const promedioArea = sumaArea / dataCopia.length; //saca promedio
  addHtmlestadisticas(promedioArea); //llamamos a la funcion para insertar HTML y pasamos el valor del pormedio
};

function addHtmlestadisticas(datosPromedio) {
  //recibe el valor del promedio del area de los paises
  const sectionStats = document.getElementById("porcentajes"); //selecciona la seccion donde insertar HTML
  const p = document.createElement("p"); //creamos el parrafo para insertar en la seccion
  p.innerHTML =
  "El promedio del área de los paises del continente seleccionado es: " +
  datosPromedio; //le agregamos el texto al parrafo
  p.classList.add("centrado"); //le asignamos la clase al parrafo
  console.log({sectionStats});
  sectionStats.appendChild(p); //le agregamos a la seccion el parrafo
}

// export function eliminarHtml(section) {
//   if (!section) return;
//   while (section.firstChild) {
//     //eliminamos HTML previamente cargado
//     section.innerHTML = "";
//   }
// }
