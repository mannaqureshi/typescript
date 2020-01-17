import { MatchStats } from "./MatachData";
export interface Analyzer {
  run(matches: MatchStats[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public a: Analyzer, public o: OutputTarget) {}
}
