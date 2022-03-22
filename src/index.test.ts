import { TurboName } from "./index"

describe("class TurboName", function () {
  it('return result', () => {
    expect(new TurboName(10).result()).toBe(10);
  });

it('10 subtract 4', () => {
  expect(new TurboName(10).subtract(4).result()).toBe(6);
});

it('20 subtract 20', () => {
  expect(new TurboName(20).subtract(20).result()).toBe(0);
});
it('15 subtract 25', () => {
  expect(new TurboName(15).subtract(25).result()).toBe(-10);
});

});

