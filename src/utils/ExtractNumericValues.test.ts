import extractNumericValues from "./ExtractNumericValues";

describe("extractNumericValues", () => {
  it("should extract numeric values from a string", () => {
    const str = "39 - 64";
    const values = extractNumericValues(str);
    expect(values).toEqual([39, 64]);
  });

  it("should extract numeric values from a string with negative numbers", () => {
    const str = "-10 - 10";
    const values = extractNumericValues(str);
    expect(values).toEqual([-10, 10]);
  });

  it("should extract single numeric value from a string", () => {
    const str = "42";
    const values = extractNumericValues(str);
    expect(values).toEqual([42]);
  });

  it("should return empty array if the string does not contain numeric values", () => {
    const str = "no numbers here";
    const values = extractNumericValues(str);
    expect(values).toEqual([]);
  });
});
