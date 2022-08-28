// const binarySearch = require("./binarySearch");
import binarySearch from "./binarySearch";
describe("Binary Search", () => {
  test("Verify that BS return -1 if the target is not in Array", () => {
    let arr = [1, 2, 3];
    let target = 4;
    let expected = -1;
    let output = binarySearch(arr, target);
    expect(output).toBe(expected);
  });
  test("Verify that BS return -1 if the array is Empty", () => {
    let arr = [];
    let target = 4;
    let expected = -1;
    let output = binarySearch(arr, target);
    expect(output).toBe(expected);
  });
  test("Verify that BS returns position if the target is in Array", () => {
    let arr = [1, 2, 3];
    arr.forEach((target, expected) => {
      let output = binarySearch(arr, target);
      expect(output).toBe(expected);
    });
  });

  test("Verify that BS return first porition if the array has multiple target values", () => {
    let arr = [4, 4, 4, 4];
    let target = 4;
    let expected = 0;
    let output = binarySearch(arr, target);
    expect(output).toBe(expected);
  });
});
