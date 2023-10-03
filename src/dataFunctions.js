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
  return filteredData;
}

export const computeStats = (data, inventarioPaises) => {
  const copia = data;
  const porcentaje = (copia.length * 100) / inventarioPaises;
  return porcentaje.toFixed(2);

  // Calcula el número total de países en tu base de datos
  //  const copiadoData = data.countries.slice ();
  //  const totalPaises = copiadoData.length;

  //  // Agrupa los países por continente y cuenta cuántos hay en cada continente
  //  const paisesPorContinente = copiadoData.reduce((accumulator, country) => {
  //    const continents = country.continents[0]; // Suponemos que cada país tiene un solo continente
  //    accumulator[continents] = (accumulator[continents] || 0) + 1;
  //    return accumulator;
  //  }, {});

  //  // Calcula el porcentaje de países por continente
  //  const porcentajePorContinente = {};
  //  for (const continents in paisesPorContinente) {
  //    const cantidad = paisesPorContinente[continents];
  //    const porcentaje = (cantidad / totalPaises) * 100;
  //    porcentajePorContinente[continents] = porcentaje;
  //  }

  //  return {
  //    totalCountries: totalPaises,
  //    percentageByContinent: porcentajePorContinente,
  //  };
};
