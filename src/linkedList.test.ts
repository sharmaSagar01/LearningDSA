import LinkedList from "./linkedList";

describe("Linked List Implementation", () => {
  it("Initial Size of Linked List should be 0", () => {
    let l = new LinkedList();
    expect(l.size()).toBe(0);
    expect(l.isEmpty()).toBe(true);
  });

  it("add Value to Linked List", () => {
    const l = new LinkedList();
    l.add(1);

    expect(l.isEmpty()).toBe(false);
    expect(l.size()).toBe(1);
    l.add(2);
    expect(l.size()).toBe(2);
  });

  it("POp Value in Linked List", () => {
    const l = new LinkedList();

    l.add(1);
    l.add(2);
    expect(l.pop()).toBe(2);
    expect(l.pop()).toBe(1);
    expect(l.size()).toBe(0);
  });

  it("unshift Value in Linked List", () => {
    const l = new LinkedList();
    l.add(1); // [1]
    l.add(2); // [1]->[2]
    l.unshift(0); // [0]->[1] ->[2]

    expect(l.pop()).toBe(2);
    expect(l.pop()).toBe(1);
    expect(l.pop()).toBe(0);
  });

  it("Shift value in Linked List ", () => {
    const l = new LinkedList();
    l.add(1); // [1]
    l.add(2); // [1]->[2]
    l.unshift(0); // [0]->[1] ->[2]
    expect(l.shift()).toBe(0);
    expect(l.shift()).toBe(1);
    expect(l.shift()).toBe(2);
    expect(l.shift()).toBe(-1);
  });
});
