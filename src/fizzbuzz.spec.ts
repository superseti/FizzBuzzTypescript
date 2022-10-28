import { getResult } from "./fizzbuzz";

describe("FizzBuzz", () => {
  it("getResult", () => {
    const result = getResult();

    const expectedResultPattern = /^1 2 Fizz 4 Buzz Fizz 7 8 /;
    expect(result).toMatch(expectedResultPattern);
  });
});
