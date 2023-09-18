export const renderItems = (data) => {

  let cards = "";

  data.forEach((element) => {
    cards += `  <div class="card">
    <h2>${element.name.common}</h2>
    <p>Capital: ${element.capital}</p>
    <img src="${element.flags.svg}" alt="Bandera de ${element.name.common}" />
  </div> `
   
  });
  return cards;
};
