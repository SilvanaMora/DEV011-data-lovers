import { SortData } from "./SortData";

describe("SortData function", () => {
  it("should sort the data in ascending order by the specified property", () => {
    const data = [
      { name: { common: "Colombia" } },
      { name: { common: "Argentina" } },
      { name: { common: "Brasil" } },
    ];

    const sortedData = SortData(data, "name", "asc");

    expect(sortedData).toEqual([
      { name: { common: "Argentina" } },
      { name: { common: "Brasil" } },
      { name: { common: "Colombia" } },
    ]);
  });

  it("should sort the data in descending order by the specified property", () => {
    const data = [
      { name: { common: "Colombia" } },
      { name: { common: "Argentina" } },
      { name: { common: "Brasil" } },
    ];

    const sortedData = SortData(data, "name", "desc");

    expect(sortedData).toEqual([
      { name: { common: "Colombia" } },
      { name: { common: "Brasil" } },
      { name: { common: "Argentina" } },
    ]);
  });
});

