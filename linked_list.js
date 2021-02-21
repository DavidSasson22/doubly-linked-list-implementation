class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prior = null;
  }
  toString() {
    return `${this.element} =>`;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  addLast(element) {
    let node = new Node(element);
    let current;

    if (this.head === null) {
      this.head = node;
    }
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      node.prior = current;
      current.next = node;
    }
    this.tail = node;
    this.size++;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  draw() {
    let current = this.head;
    let result = ``;
    while (current) {
      result += ` ` + current.toString();
      current = current.next;
    }
    console.log(result + ` null`);
  }

  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    while (current) {
      let temp = current.next;
      current.next = current.prior;
      current.prior = temp;
      current = current.prior;
    }
  }

  removeKnode (index1) {
    let current = this.head;
    for (let i = 0; i < index1-1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
  }

  circilarLinkedList () {
    if (this.head == null) {
      return false
    }
    let fast = this.head.next;
    let slow = this.head;
    while (fast && fast.next && slow) {
      if (fast === slow) {
        return true
      }
      fast = fast.next.next;
      slow = slow.next;
    }
    return false
  }
}


ls = new LinkedList;
ls.addLast(1);
ls.addLast(2);
ls.addLast(3);
ls.addLast(4);
ls.addLast(5);
ls.addLast(6);
ls.addLast(7);
ls.addLast(8);

console.log(ls.circilarLinkedList());