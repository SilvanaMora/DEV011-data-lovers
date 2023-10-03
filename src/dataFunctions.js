// estas funciones son de ejemplo

export const example = () => {
  return "example";
};

export const anotherExample = () => {
  return [];
};

export function filterData(data, filterBy, selectedValue) {
  const filteredData = data.filter((pais) => {
    return pais[filterBy].includes(selectedValue);
  });

  console.log(filteredData);
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



//export const search = (data,name) => {
//for (const countries of data.countries.name.common) {
//if (name.common === name) {
//console.log(countries);
//return countries;
//}
//}
//}
