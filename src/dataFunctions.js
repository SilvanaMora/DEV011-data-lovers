// estas funciones son de ejemplo

export const example = () => {
  return "example";
};

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

export function filterData(data, filterBy, selectedValue) {
  const filteredData = data.filter((pais) => {
    return pais[filterBy].includes(selectedValue);
  });
  // console.log(filteredData);
  // computeStats(filteredData); //para que haga el calculo con la data filtrada
  newData = filteredData
  return filteredData;
}

export function sortData(data, sortBy, sortOrder) {
  if (data) {
    return data.sort((a, b) => {
      if (a[sortBy] < b[sortBy].common) {
        return sortOrder === "asc" ? 1 : -1;
      }
      if (a[sortBy] > b[sortBy].common) {
        return sortOrder === "desc" ? -1 : 1;
      }

      return 0;
    });
  } else {
    return data;
  }
}

// export function eliminarHtml(section) {
//   if (!section) return;
//   while (section.firstChild) {
//     //eliminamos HTML previamente cargado
//     section.innerHTML = "";
//   }
// }
