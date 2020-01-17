export interface Sortable {
  swap(i: number, j: number): void;
  length: number;
  compare(i: number, j: number): boolean;
}
