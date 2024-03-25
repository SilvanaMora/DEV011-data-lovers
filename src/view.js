export const renderItems = (data) => {
  let cards = "";
  console.log(data);
  data.forEach((element) => {
    cards += ` <div class= "marcoCartas"> <div class="card">
     <h2>${element.name.common}</h2>
     <img src="${element.flags.svg}" alt="Bandera de ${element.name.common}" />
     <p>Capital: ${element.capital}</p>
     <p2>Área:${element.area}</p2>
   <p3>Subregion:${element.subregion}</p3>
     </div>
   </div> `;
  });
  return ul;
};
