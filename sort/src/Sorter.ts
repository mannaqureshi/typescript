import { Sortable } from "./Sortable";
export abstract class Sorter {
  abstract swap(i: number, j: number): void;
  abstract length: number;
  abstract compare(i: number, j: number): boolean;

  sort() {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // instance of for non primitives (constructor function)
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
        // type of for primitives
        // else if (typeof this.collection == "string") {}
      }
    }
  }
}
