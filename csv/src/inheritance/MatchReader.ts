import { CsvFileReader } from "./CsvFileReader";
import { convertStringToDate } from "../utils";
// enumeration
export enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D"
}
export type MatchStats = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

export class MatchReader extends CsvFileReader<MatchStats> {
  mapRowTypes(row: string[]): MatchStats {
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
}
