import { Sortable } from "./Sortable";
import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter implements Sortable {
  constructor(public data: number[]) {
    super();
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  get length(): number {
    return this.data.length;
  }

  swap(leftIndex: number, rightIndex: number): void {
    [this.data[leftIndex], this.data[rightIndex]] = [
      this.data[rightIndex],
      this.data[leftIndex]
    ];
  }
}
