<<<<<<< HEAD
import { data as fakeData } from "./data.js";
//import { renderItems } from "../src/view.js";
import { SortData } from "../src/dataFunctions.js";
import { filterData } from "../src/dataFunctions.js";
import { BuscarPais } from "../src/dataFunctions.js";

//console.log(fakeData);
//console.log(renderItems);

//describe("example", () => {
//it("returns `example`", () => {
//expect(example()).toBe("example");
//});
//});

// sortData.test

describe("SortData function", () => {
  it("Muestra los paises ordenados de mayor a menor", () => {
    const sortedData = SortData(fakeData, "name", "asc");
    //Verifica que el primer elemento sea "Bosnia and Herzegovina"
    console.log(sortedData[0].name.common);
    expect(sortedData[0].name.common).toBe("Bosnia and Herzegovina");
    // Verifica que el último elemento sea "Singapore"
    expect(sortedData[fakeData.length - 1].name.common).toBe("Singapore");
  });

  it('Muestra los paises ordenados de menor a mayor "desc"', () => {
    const sortedData = SortData(fakeData, "name", "desc");

    //Verifica que el primer elemento sea "Singapore"
    expect(sortedData[0].name.common).toBe("Singapore");
    // Verifica que el último elemento sea "Bosnia and Herzegovina"
    expect(sortedData[fakeData.length - 1].name.common).toBe(
      "Bosnia and Herzegovina"
    );
  });
});

// filterData.test
describe("filterData function", () => {
  it("Filtra los paises por continente", () => {
    const filteredData = filterData(fakeData, "continents", "America");
    console.log(filteredData);
    //const prueba = filteredData[0].continents
    // expect(filteredData[0].continents).toEqual(["America"]);
  });
});

//buscar pais

describe("BuscarPais const ", () => {
  it("Busca cada Pais al inserar el nombre", () => {
    const data = [
      {
        name: {
          common: "Guatemala",
          official: "Republic of Guatemala",
        },
        tld: [".gt"],
        independent: true,
        capital: ["Guatemala City"],
        subregion: "Central America",
        languages: {
          spa: "Spanish",
        },
        borders: ["BLZ", "SLV", "HND", "MEX"],
        area: 108889,
        flag: "🇬🇹",
        population: 16858333,
        gini: {
          2014: 48.3,
        },
        fifa: "GUA",
        timezones: ["UTC-06:00"],
        continents: ["America"],
        flags: {
          png: "https://flagcdn.com/w320/gt.png",
          svg: "https://flagcdn.com/gt.svg",
          alt: "The flag of Guatemala is composed of three equal vertical bands of light blue, white and light blue, with the national coat of arms centered in the white band.",
        },
      },
    ];

    const resultado = BuscarPais(fakeData, "Guatemala");

    expect(resultado).toEqual(data);
  });
});
=======
import { renderItems } from "../src/view.js";
import { SortData } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";


console.log(renderItems);

// // describe('SortData', () => {

// //   it('returns an array of ordered countries' , () => {
// //     const
// //     expect(example()).toBe('example');
// //   });
// // });

// describe('anotherExample', () => {

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });

describe("SortData", () => {
  it("Muestra los paises ordenados de mayor a menor", () => {
    const alfabeto = SortData(fakeData, "name", "asc");

    // Verifica que el primer elemento sea "Bosnia and Herzegovina"
    expect(alfabeto).toEqual(fakeData.reverse());
    // Verifica que el último elemento sea "Singapore"
  });
});




//   describe("SortData2", () => {
//     it('should sort data in descending order when sortOrder is "desc"', () => {
//       const alfabeto = SortData(fakeData, "name", "desc");

//       // Verifica que el primer elemento sea "Singapore"
//       expect(alfabeto[0].name.common).toBe("Singapore");
//       // Verifica que el último elemento sea "Bosnia and Herzegovina"
//       expect(alfabeto[fakeData.length - 1].name.common).toBe(
//         "Bosnia and Herzegovina"
//       );
//     });
//   });
// });
>>>>>>> origin/main
