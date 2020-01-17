import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import CharacterCollection from "./Character";
import { LinkedList } from "./LinkedList";

let numberCollection = new NumbersCollection([1, 5, -2, 6, -1]);
numberCollection.sort();

console.log(numberCollection.data);

let charCollection = new CharacterCollection("mani");
charCollection.sort();
console.log(charCollection.data);

let list = new LinkedList();
list.add(2);
list.add(-2);
list.add(46);
list.add(31);
list.add(-62);
list.sort();
list.print();
