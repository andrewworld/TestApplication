import { filterByText } from "../src/utils/utils";

describe("filterByText: should return true if some object value includes filter text, { firstName: John, lastName: Doe }", () => {
  it("should return true, filter by Jo, no custom values", () => {
    const obj = { firstName: "John", lastName: "Doe" };
    const searchText = "Jo";

    expect(filterByText(obj, searchText)).toBe(true);
  });

  it("should return false, filter by Test, no custom values", () => {
    const obj = { firstName: "John", lastName: "Doe" };
    const searchText = "Test";

    expect(filterByText(obj, searchText)).toBe(false);
  });

  it("should return true, filter by John D, with custom value John Doe", () => {
    const obj = { firstName: "John", lastName: "Doe" };
    const customValues = ["John Doe"];
    const searchText = "John D";

    expect(filterByText(obj, searchText, customValues)).toBe(true);
  });
 
  it("should return false, filter by Test, with custom value John Doe", () => {
    const obj = { firstName: "John", lastName: "Doe" };
    const customValues = ["John Doe"];
    const searchText = "Test";

    expect(filterByText(obj, searchText, customValues)).toBe(false);
  });
});
