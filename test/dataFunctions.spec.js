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
  it("should sort data in ascending order by default", () => {
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
