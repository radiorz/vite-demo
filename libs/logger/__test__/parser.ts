import {
  addLevelToString,
  doParsers,
  toJsonStringify,
  fromArrayToString,
} from "../src/parser";
import { curryRight } from "lodash";
const parsers: Function[] = [
  toJsonStringify,
  fromArrayToString,
  curryRight(addLevelToString)("info"),
];
const message = [1, 2, 3];
let finalMessage = doParsers(message, parsers);
console.log(`finalMessage`, finalMessage);
