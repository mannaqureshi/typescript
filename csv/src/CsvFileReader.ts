import path from "path";
import fs from "fs";
import { DataReader } from "./MatchReader";

export class CsvFileReader implements DataReader {
  data: string[][] = [];
  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(path.resolve(__dirname, "..", this.filename), {
        encoding: "utf-8"
      })
      .split(`\n`)
      .map(row => {
        return row.split(",");
      });
  }
}
