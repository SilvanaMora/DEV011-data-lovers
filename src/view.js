export const renderItems = (data) => {
<<<<<<< HEAD
  let cards = "";

  data.forEach((element) => {
    cards += ` <div class= "marcoCartas"> <div class="card">
     <h2>${element.name.common}</h2>
     <img src="${element.flags.svg}" alt="Bandera de ${element.name.common}" />
     <p>Capital: ${element.capital}</p>
     <p2>Área:${element.area}</p2>
   <p3>Subregion:${element.subregion}</p3>
     </div>
   </div> `;
=======
  const ul = document.createElement("ul");
  ul.setAttribute('class', 'claseContenedorDeCartas')
  data.forEach((element) => {
    const card = document.createElement("li");
    card.setAttribute('class', "cardLi");
    card.setAttribute("itemscope", "");
    card.setAttribute("itemtype", "element");
    card.innerHTML = ` 
    <div class= "marcoCartas"> 
    <div class="card">
    <h2>${element.name.common}</h2>
    <p><b>Capital:</b> ${element.capital}</p>
    <img src="${element.flags.svg}" alt="Bandera de ${element.name.common}" />
      <div class="info">
        <p> <b>Población:</b> ${element.population}</p>
        <p><b>Área:</b> ${element.area} <b>km² </b></p>
       <!-- Agrega más información aquí según tus necesidades -->
       </div>
     </div>
    </div>
     `;
    ul.appendChild(card);
>>>>>>> origin/main
  });
  return ul;
};