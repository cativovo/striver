import { test } from "vitest";
import Solution from "./selection-sort.mjs";
import { expect } from "vitest";

test("test selection sort", () => {
  const tests = [
    {
      input: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
      want: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      input: [38, 31, 20, 14, 30],
      want: [14, 20, 30, 31, 38],
    },
  ];
  const solution = new Solution();

  for (const test of tests) {
    const got = solution.selectionSort(test.input);
    expect(got).toEqual(test.want);
  }
});
