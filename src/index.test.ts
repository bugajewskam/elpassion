import { TurboName } from "./index"

describe("class TurboName", function () {
  it('return result', () => {
    expect(Number(new TurboName(10).result())).toBe(10);
  });

it('10 subtract 4', () => {
  expect(Number(new TurboName(10).subtract(4).result())).toBe(6);
});

it('20 subtract 20', () => {
  expect(Number(new TurboName(20).subtract(20).result())).toBe(0);
});
it('15 subtract 25', () => {
  expect(Number(new TurboName(15).subtract(25).result())).toBe(-10);
});
it('10 divide 5', () => {
  expect(Number(new TurboName(10).divide(5).result())).toBe(2);
});
it('Divide by 0', () => {
  expect(()=> new TurboName(10).divide(0).result()).toThrow("Can't divide by 0!")

});
it('100 divide by -4', () => {
  expect(Number(new TurboName(100).divide(-4).result())).toBe(-25);
});
it("method chaining ", () => {
  expect(Number(new TurboName(10).subtract(5).divide(-3).result())).toBeCloseTo(-1.666667);
});

});
it('Integer should not overflow', () => {
  expect(Number(new TurboName(-Number.MAX_VALUE).subtract(Number.MAX_VALUE).divide(Number.MAX_VALUE).result())).toBe(-2);
});

