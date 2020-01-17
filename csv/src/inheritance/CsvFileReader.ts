import path from "path";
import fs from "fs";

// generics
// define type of a futrue state property, argument and return type
export abstract class CsvFileReader<T> {
  data: T[] = [];
  constructor(public filename: string) {}
  abstract mapRowTypes(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(path.resolve(__dirname, "..", this.filename), {
        encoding: "utf-8"
      })
      .split(`\n`)
      .map(row => {
        return row.split(",");
      })
      .map(this.mapRowTypes);
  }
}
