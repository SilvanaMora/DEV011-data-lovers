// export const renderItems = (data) => {
//   let cards = "";

//   data.forEach((element) => {
//     cards += ` <div class= "marcoCartas"> <div class="card">
//     <h2>${element.name.common}</h2>
//     <img src="${element.flags.svg}" alt="Bandera de ${element.name.common}" />
//     <p>Capital: ${element.capital}</p>
//     <p2>Área:${element.area}</p2>
//   <p3>Subregion:${element.subregion}</p3>
//     </div>
//   </div> `;
//   });
//   return cards;
// };

export const renderItems = (data) => {
  let cards = "";
  data.forEach((element) => {
    cards += `<div class="marcoCartas"> <div itemscope itemtype = "data"> <div class="card">
          <h2>${element.name.common}</h2>
          <p itemprop="capital">Capital: ${element.capital}</p>
            <img src="${element.flags.svg}" alt="Bandera de ${element.name.common}" />
            <div class="info">
          <p itemprop="population">Población:${element.population}</p>
              <p itemprop="area"> Área:${element.area} km²</p>
            </div>
          </dl>
        </div>
      </div>`
  });
  return cards;
};
