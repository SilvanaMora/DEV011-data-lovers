export function sortData (data, sortBy, sortOrder) {
  data.sort ((a,b) => {
      if (a[sortBy].common < b[sortBy].common ) {
      return -1;
      }
      if (a[sortBy].common > b[sortBy].common ) {
        return 1;
      }
    return 0; // En caso de que no se pueda determinar el orden
  });

console.log (data);
};

// function BuscarPais() {}

export const BuscarPais = (data) => {
  let inputText = document.getElementById("textoIngresado").value.toUpperCase();
  console.log(inputText);
  const resultado = data.filter((word) => word.name.common.toUpperCase().includes(inputText));
  return resultado;
}








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