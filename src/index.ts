import Big from 'big.js';

export const number = 5;
export class TurboName {
  num: Big;
  constructor(num: number) {
    this.num = Big(num);
  }
  result() {
    return this.num;
  }
  subtract(x: number) {
    this.num = this.num.minus(Big(x));
    return this;
  }
  divide(x:number){
      if(x ===0){
          throw new Error("Can't divide by 0!")
      }
      this.num = this.num.div(Big(x))
      return this;
  }
}
