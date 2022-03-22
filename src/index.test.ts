import { TurboName } from "./index"

describe("class TurboName", function () {
  it('return result', () => {
    expect(new TurboName(10).result()).toBe(10);
  });

it('10 subtract 4', () => {
  expect(new TurboName(10).subtract(4).result()).toBe(6);
});
});
