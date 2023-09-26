export function filterData(data, filterBy, selectedValue) {
  const filteredData = data.filter((pais) => {
    return pais[filterBy].includes(selectedValue);
  });
  console.log(filteredData);
  return filteredData;
}



export const OrdenAlfa = (data, sortBy, sortOrder) => {
  const paisesArreglo = data;
  paisesArreglo.sort ((a,b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    
    return 0;
  });
  console.log (paisesArreglo)
return paisesArreglo

  };
 
  export const sortData = (ordenar) => {
  return "example";
};


  export const anotherExample = () => {
  return [];
};
// function BuscarPais() {

export const BuscarPais = (data,value) => {
  const resultado = data.filter((word) => word.name.common.toUpperCase().includes(value.toUpperCase()));
  return resultado;
}

