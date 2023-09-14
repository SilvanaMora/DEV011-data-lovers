export const renderItems = (data) => {

  let cards = "";

  data.forEach((element) => {
    cards += `<li>${element.name.common }
    <img src=${element.flags.svg}/>
    </li>`
  });

  //  countries.forEach(countries.flags.svg) => {
  //     titlesHTML +=
  //     <li> <img src= '$={flags.svg}' /> </li>;
  return cards;
};
