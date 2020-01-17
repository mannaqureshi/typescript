import { Sortable } from "./Sortable";
import { Sorter } from "./Sorter";
export default class CharacterCollection extends Sorter implements Sortable {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }
  compare(i: number, j: number): boolean {
    return this.data[i].toLowerCase() > this.data[j].toLowerCase();
  }
  swap(i: number, j: number): void {
    const charArray = this.data.split("");
    [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
    this.data = charArray.join("");
  }
}
