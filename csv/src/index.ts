import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatachData";

const matchReader = new MatchReader(new CsvFileReader("data.csv"));
matchReader.load();

let manUnitedWins = 0;
const { HomeWin, AwayWin } = MatchResult;
for (const match of matchReader.matches) {
  if (match[1] == "Man United" && match[5] == HomeWin) {
    manUnitedWins++;
  } else if (match[2] == "Man United" && match[5] == AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);

// Composition vs Inheritance
// has a vs is a | Relationship
