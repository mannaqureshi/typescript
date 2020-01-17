import { Sortable } from "./Sortable";
import { Sorter } from "./Sorter";
class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter implements Sortable {
  head: Node | null = null;

  add(data: number): void {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = newNode;
  }

  get length(): number {
    let tail: Node | null = this.head;
    let length = 0;
    while (tail) {
      tail = tail.next;
      length++;
    }
    return length;
  }

  at(index: number): Node {
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter == index) {
        return node;
      }
      node = node.next;
      counter++;
    }
    throw new Error("Index Out Of Bounds");
  }

  compare(i: number, j: number): boolean {
    return this.at(i).data > this.at(j).data;
  }

  swap(i: number, j: number): void {
    [this.at(i).data, this.at(j).data] = [this.at(j).data, this.at(i).data];
  }

  print(): void {
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
