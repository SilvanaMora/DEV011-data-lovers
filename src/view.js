// estas funciones son de ejemplo

import countries from "./data/countries/countries.js";

export const renderItems = (data) => {
  const flags = data.flags;
  let titlesHTML = "";

countries.forEach(flags => {
  console.log(flags);
  
});

//  countries.forEach(countries.flags.svg) => {
//     titlesHTML +=
//     <li> <img src= '$={flags.svg}' /> </li>;
  }
  return titlesHTML;


