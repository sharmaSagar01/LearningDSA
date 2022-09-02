/*
*Binay Search Treee 
**BST can have only two child node
**BST is sorted
**The left child node is less than the parent node
**The right child node is greater than the parent node

*/

class NodeItem {
  data: number | null;
  left: number | null;
  right: number | null;
  constructor(data?: number, left: number = null, right: number = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  root: number | any;
  constructor() {
    this.root = null;
  }

  insert(data: number): BST {
    const node = this.root;
    if (node === null) {
      this.root = new NodeItem(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new NodeItem(data);
            return;
          } else if (node.left != null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new NodeItem(data);
            return;
          } else if (node.right != null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin(): number {
    let current = this.root;
    while (current.left != null) {
      current = current.left;
    }
    return current.data;
  }

  findMax(): number {
    let current = this.root;
    while (current.right != null) {
      current = current.right;
    }
    return current.data;
  }
  // Search the Data Item and return that data item if it is present there

  /**
   * Function: searchDataItem(data)
   * Output: Return the searched item or node if the item is found else Null is returned.
   */
  searchDataItem(data: number): number {
    let current = this.root;
    while (current.data != null) {
      if (data === current.data) {
        return current.data;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current.data;
  }

  // Check if the data in present in the tree or not
  /**
   * Function: isPresent(data)
   * Output: True or False depending on the presense of data
   */
  isPresent(data: number): boolean {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  // Removing the data item form the BST
  /**
   * Function: removeItem(data)
   * Output: Remove the data item from the BST
   */
  removeItem(data: number) {
    const removeNode = function (node, data) {
      if (node === null) {
        return null;
      }

      if (data === node.data) {
        // Node has no children
        if (node.left === null && node.right === null) {
          return null;
        }
        // Node has no left child
        if (node.left === null) {
          console.log(node.right);
          return node.right;
        }
        // Node has no right child
        if (node.right === null) {
          console.log(node.left);
          return node.left;
        }
        //Node has two children
        let tempNode = node.right;
        while (tempNode.left != null) {
          tempNode = tempNode.left;
        }

        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  // Find the Minimum Height of the BST
  /**
   * Function: findMinHeight()
   * Min Height is the height in which the node either has one or no children at all
   */

  findMinHeight(node = this.root) {
    if (node === null) {
      return -1;
    }

    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);

    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  // Find the Maximum Height of the BST
  /**
   * @function: findMaxHeight()
   * @param {*} node
   * @returns the max heigt
   */

  findMaxHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);

    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }

  //Get all the data from the tree in in-order traveral (Depth First search)
  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      let result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }

  //Get all the data from the tree in pre-order traveral
  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      let result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);
      return result;
    }
  }

  ////Get all the data from the tree in post-order traveral
  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      let result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      }
      traversePostOrder(this.root);
      return result;
    }
  }
  // Get all the data from the tree in level-order traversal

  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root != null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left != null) {
          Q.push(node.left);
        }
        if (node.right != null) {
          Q.push(node.right);
        }
      }
      return result;
    } else {
      return null;
    }
  }
}

export default BST;
