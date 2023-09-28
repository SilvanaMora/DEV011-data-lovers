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
  const inputText = document.getElementById("textoIngresado").value.toUpperCase();
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
  return filteredData;
}

export const anotherExample = () => {
  return [];
};
