// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data;
    (next) ? this.next = next : this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let nextNode = this.head;
      
    while (nextNode) {
      count++;
      nextNode = nextNode.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node.next) {
      node = node.next;
    }

    return node;

  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let node = this.head;
    let nextNode = node.next;

    while (node) {
      if (!nextNode.next) {
        node.next = null;
        return;
      } else {
        node = nextNode;
        nextNode = node.next;
      }
    }

  }

  insertLast(data) {
    const last = this.getLast();
    if (!last) {
      this.head = new Node(data);
    } else {
      last.next = new Node(data);
    }
  }

  getAt(n) {
    if (!this.head) {
      return null;
    }

    let counter = 0;
    let node = this.head;

    while (counter < n) {
      if (!node.next) {
        return null;
      }
      
      node = node.next;
      counter++;
    }

    return node;
  }

  removeAt(n) {
    if (!this.head) {
      return;
    }

    if (n === 0) {
      this.head = this.head.next;
    } else {
      const prevNode = this.getAt(n-1);
      if (!prevNode || !prevNode.next) {
        return null;
      } else if (!prevNode.next.next) {
        prevNode.next = null;
      } else {
        prevNode.next = prevNode.next.next;
      }
    }

  }

  insertAt(data, integer) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (integer === 0) {
      this.head = new Node(data, this.head);
      return;
    } 
    
    const prevNode = this.getAt(integer-1) || this.getLast();
    const node = new Node(data, prevNode.next);
    prevNode.next = node;

  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while(node) {
      yield node;
      node = node.next;
    }
  }
  
}

module.exports = { Node, LinkedList };
