class MySet {
  collection: number | string[];

  constructor() {
    this.collection = [];
  }

  has = function (element: number | string): boolean {
    return this.collection.indexOf(element) !== -1;
  };

  values = function (): number[] | string[] {
    return this.collection;
  };
  add = function (element: number | string): boolean {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  };
  remove = function (element: number | string): boolean {
    if (this.has(element)) {
      let index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  };
  size = function (): number {
    return this.collection.length;
  };
  union = function (otherSet: MySet): MySet {
    let unionSet = new MySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach((e: number | string) => {
      unionSet.add(e);
    });
    secondSet.forEach((e: number | string) => {
      unionSet.add(e);
    });
    return unionSet;
  };
  intersection = function (otherSet): MySet {
    let intersectionSet = new MySet();
    let firstSet = this.values();
    firstSet.forEach((e: number | string) => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };
  differences = function (otherSet): MySet {
    let differenceSet = new MySet();
    let firstSet = this.values();
    firstSet.forEach((e: number | string) => {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };
  subset = function (otherSet): boolean {
    let firstSet = this.values();
    return firstSet.every((e: number | string) => {
      return otherSet.has(e);
    });
  };
}

export default MySet;
