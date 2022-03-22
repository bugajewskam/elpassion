import { TurboName } from "./index"

describe("class TurboName", function () {
  it('return result', () => {
    expect(new TurboName(10).result()).toBe(10);
  });


});
