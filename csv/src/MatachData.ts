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
