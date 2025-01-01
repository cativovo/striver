import { expect, test } from "vitest";
import Solution from "./bubble-sort.mjs";

test("test bubble sort", () => {
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
      input: [1, 2, 3, 4, 5],
      want: [1, 2, 3, 4, 5],
    },
  ];

  const solution = new Solution();

  for (const test of tests) {
    const got = solution.bubbleSort(test.input);
    expect(got).toEqual(test.want);
  }
});
