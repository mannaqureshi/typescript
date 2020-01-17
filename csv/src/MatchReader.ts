import { convertStringToDate } from "./utils";
import { MatchStats, MatchResult } from "./MatachData";

export interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchStats[] = [];
  constructor(public reader: DataReader) {}

  load() {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchStats => {
        return [
          convertStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          // type assertion
          row[5] as MatchResult,
          row[6]
        ];
      }
    );
  }
}
