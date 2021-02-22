import {
  map,
  pipe,
  forEach,
  plusOne,
  generateNElements,
  printResult,
} from "./utils";
import { getWord } from "./get-word";

const numberOfElements = 100; // positive number, "only 1 if allowed"

export const solved = pipe(
  generateNElements,
  map(plusOne),
  map(getWord),
  forEach(printResult)
);

solved(numberOfElements);
