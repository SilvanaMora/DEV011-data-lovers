export const renderItems = (data) => {
  let cards = "";
  data.forEach((element) => {
    cards += ` 
    <div class= "marcoCartas"> 
    <div class="card">
    <h2>${element.name.common}</h2>
    <p>Capital: ${element.capital}</p>
    <img src="${element.flags.svg}" alt="Bandera de ${element.name.common}" />
    <div class="info">
    <p>Población: ${element.population}</p>
    <p>Área: ${element.area} km²</p>
    <!-- Agrega más información aquí según tus necesidades -->
  </div>
        </div>
      </div>
    `;
  });
  return cards;
};





