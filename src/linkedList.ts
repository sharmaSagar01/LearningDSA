class LinkedList {
  val: number;
  next: this | LinkedList;

  constructor(val?: number, next?: LinkedList) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  isEmpty = (): boolean => {
    return this.next === null;
  };

  add = (val: number) => {
    if (this.isEmpty()) {
      this.next = new LinkedList(val);
    } else {
      let body = this.next;
      while (body.next != null) {
        body = body.next;
      }
      body.next = new LinkedList(val);
    }
  };

  unshift = (val: number) => {
    this.next = new LinkedList(val, this.next);
  };

  pop = (): number => {
    if (this.isEmpty()) {
      return -1;
    }
    let current_body = this.next;
    let previous_body: LinkedList | this = this;
    while (current_body.next != null) {
      previous_body = current_body;
      current_body = current_body.next;
    }
    previous_body.next = null;
    return current_body.val;
  };

  shift = (): number | LinkedList => {
    if (this.isEmpty()) {
      return -1;
    } else {
      let curr_body = this.next;
      this.next = curr_body.next;
      return curr_body.val;
    }
  };

  size = (): number => {
    let count = 0;
    let body = this.next;
    while (body != null) {
      count++;
      body = body.next;
    }

    return count;
  };

  // toArray(): number[] {
  //   let body = this.next;
  //   let arr = [];

  //   while (body != null) {
  //     arr.push(body.val);
  //     body = body.next;
  //   }
  //   return arr;
  // }
}

export default LinkedList;
