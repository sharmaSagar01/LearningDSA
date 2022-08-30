import MySet from "./sets";

describe("Set Implementation", () => {
  test("Verify if the element is added on the set or not", () => {
    let setA = new MySet();
    let output = setA.add(1);
    let expected = true;
    expect(output).toBe(expected);
  });
  test("Verify if the set return the size of the set", () => {
    let setA = new MySet();
    setA.add(1);
    setA.add(2);
    setA.add(3);
    let output = setA.size();
    let expected = 3;
    expect(output).toBe(expected);
  });
  test("Verify if our function return true we can remove the item from the set", () => {
    let setA = new MySet();
    setA.add(1);
    setA.add(2);
    let output = setA.remove(2);
    let expected = true;
    expect(output).toBe(expected);
  });
  test("Verify if our function return false we can remove the item from the set", () => {
    let setA = new MySet();
    setA.add(1);
    setA.add(2);
    let output = setA.remove(2);
    let expected = true;
    expect(output).toBe(expected);
  });
  test("Verify if the functions return the collection or not", () => {
    let setA = new MySet();
    setA.add(1);
    setA.add(2);
    setA.add(3);
    let output = setA.values();
    let expected = [1, 2, 3];
    expect(output).toEqual(expected);
  });
  test("Verify if the union of two sets", () => {
    let setA = new MySet();
    setA.add("a");
    let setB = new MySet();
    setB.add("b");
    setB.add("c");
    setB.add("d");
    let output = setA.union(setB).values();
    let expected = ["a", "b", "c", "d"];
    expect(output).toEqual(expected);
  });
  test("Verify  the Intersection of two sets", () => {
    let setA = new MySet();
    setA.add("a");
    let setB = new MySet();
    setB.add("b");
    setB.add("c");
    setB.add("a");
    setB.add("d");
    let outputArr = setA.intersection(setB).values();
    let expectedArr = ["a"];

    expect(outputArr).toEqual(expectedArr);
  });
  test("Check the Differences of the set", () => {
    let setA = new MySet();
    setA.add("a");
    setA.add("b");
    let setB = new MySet();
    setB.add("a");
    setB.add("b");
    setB.add("d");
    setB.add("e");
    let outputArr = setB.differences(setA).values();
    let expectedArr = ["d", "e"];
    console.log(outputArr, expectedArr);
    expect(outputArr).toEqual(expectedArr);
  });
  test("Check the Differences of the set", () => {
    let setA = new MySet();
    setA.add("a");
    setA.add("b");
    let setB = new MySet();
    setB.add("a");
    setB.add("b");
    setB.add("d");
    setB.add("e");
    let outputArr = setA.subset(setB);
    let expectedArr = true;
    expect(outputArr).toEqual(expectedArr);
  });
});
