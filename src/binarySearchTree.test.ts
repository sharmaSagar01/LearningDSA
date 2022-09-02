import BST from "./binarySearchTree";

describe("BST", () => {
  test("Find Min value in BST", () => {
    const bst = new BST();
    bst.insert(2);
    bst.insert(3);
    bst.insert(1);
    let output = bst.findMin();
    expect(output).toBe(1);
  });

  test("Find Max value in BST", () => {
    const bst = new BST();
    bst.insert(2);
    bst.insert(3);
    bst.insert(1);
    let output = bst.findMax();
    expect(output).toBe(3);
  });

  test("Find item in BST", () => {
    const bst = new BST();
    bst.insert(2);
    bst.insert(3);
    bst.insert(1);
    let output = bst.searchDataItem(1);
    expect(output).toBe(1);
  });

  test("Check if the data is Present in BST or nor", () => {
    const bst = new BST();
    bst.insert(2);
    bst.insert(3);
    bst.insert(1);
    let output_1 = bst.isPresent(3);
    expect(output_1).toBe(true);
    let output_2 = bst.isPresent(4);
    expect(output_2).toBe(false);
  });

  test("Remove the data item in BST", () => {
    const bst = new BST();
    bst.insert(2);
    bst.insert(3);
    bst.insert(1);
    bst.removeItem(3);
    let output = bst.findMax();
    expect(output).toBe(2);
  });

  test("Find Minimum Height in BST", () => {
    const bst = new BST();
    bst.insert(2);
    bst.insert(3);
    bst.insert(1);
    let output = bst.findMinHeight();
    expect(output).toBe(1);
  });

  
  test("Find Maximum Height in BST", () => {
    const bst = new BST();
    bst.insert(2);
    bst.insert(3);
    bst.insert(1);
    let output = bst.findMaxHeight();
    expect(output).toBe(1);
  });


  test("Check if Tree is Balanced or Not", () => {
    const bst = new BST();
    bst.insert(2);
    bst.insert(3);
    bst.insert(1);
    let output = bst.isBalanced();
    expect(output).toBe(true);
  });

  test("Find In-order Traversal", () => {
    const bst = new BST();
    bst.insert(9);
    bst.insert(4);
    bst.insert(17);
    bst.insert(3);
    bst.insert(6);
    bst.insert(22);
    bst.insert(5);
    bst.insert(7);
    bst.insert(20);
    bst.insert(10);
    let output = bst.inOrder();
    let expected = [3, 4, 5, 6, 7, 9, 10, 17, 20, 22];
    expect(output).toEqual(expected);
  });

  test("Find Pre-order Traversal", () => {
    const bst = new BST();
    bst.insert(9);
    bst.insert(4);
    bst.insert(17);
    bst.insert(3);
    bst.insert(6);
    bst.insert(22);
    bst.insert(5);
    bst.insert(7);
    bst.insert(20);
    bst.insert(10);
    let output = bst.preOrder();
    let expected = [9, 4, 3, 6, 5, 7, 17, 10, 22, 20];
    expect(output).toEqual(expected);
  });

  test("Find Post-order Traversal", () => {
    const bst = new BST();
    bst.insert(9);
    bst.insert(4);
    bst.insert(17);
    bst.insert(3);
    bst.insert(6);
    bst.insert(22);
    bst.insert(5);
    bst.insert(7);
    bst.insert(20);
    bst.insert(10);
    let output = bst.postOrder();
    let expected = [3, 5, 7, 6, 4, 10, 20, 22, 17, 9];
    expect(output).toEqual(expected);
  });

  test("Find Level-order Traversal", () => {
    const bst = new BST();
    bst.insert(9);
    bst.insert(4);
    bst.insert(17);
    bst.insert(3);
    bst.insert(6);
    bst.insert(22);
    bst.insert(5);
    bst.insert(7);
    bst.insert(20);
    bst.insert(10);
    let output = bst.levelOrder();
    let expected = [9, 4, 17, 3, 6, 10, 22, 5, 7, 20];
    expect(output).toEqual(expected);
  });
});
