export const number = 5;
export class TurboName {
  num: number;
  constructor(num: number) {
    this.num = num;
  }
  result() {
    return this.num;
  }
  subtract(x: number) {
    this.num = this.num - x;
    return this;
  }
}
