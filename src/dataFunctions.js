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



//export const search = (data,name) => {
  //for (const countries of data.countries.name.common) {
    //if (name.common === name) {
      //console.log(countries);
      //return countries;
    //}
  //}
//}