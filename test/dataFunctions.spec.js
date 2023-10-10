import { SortData } from '../src/dataFunctions.js';
import { anotherExample } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';
import { SortData } from "./dataFunctions.js";


console.log(fakeData);

describe('example', () => {

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

describe('SortData', () => {

  it('should sort data in ascending order', () => {
    expect(order()).toBe('OMG');
  });
});

// sortData.test.js

describe('SortData function', () => {
  it('should sort data in ascending order by default', () => {
    const sortedData = SortData(data, 'name', 'asc');

    // Verifica que el primer elemento sea "Bosnia and Herzegovina"
    expect(sortedData[0].name.common).toBe('Bosnia and Herzegovina');
    // Verifica que el último elemento sea "Singapore"
    expect(sortedData[data.length - 1].name.common).toBe('Singapore');
  });

  it('should sort data in descending order when sortOrder is "desc"', () => {
    const sortedData = SortData(data, 'name', 'desc');

    // Verifica que el primer elemento sea "Singapore"
    expect(sortedData[0].name.common).toBe('Singapore');
    // Verifica que el último elemento sea "Bosnia and Herzegovina"
    expect(sortedData[data.length - 1].name.common).toBe('Bosnia and Herzegovina');
  });


});

