import { test, expect } from "vitest";
import Solution from "./insertion-sort.mjs";

test("test insertion sort", () => {
  const tests = [
    {
      input: [4, 1, 3, 9, 7],
      want: [1, 3, 4, 7, 9],
    },
    {
      input: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
      want: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      input: [4, 1, 9],
      want: [1, 4, 9],
    },
  ];

  const solution = new Solution();

  for (const test of tests) {
    const got = solution.insertionSort(test.input);
    expect(got).toEqual(test.want);
  }
});
