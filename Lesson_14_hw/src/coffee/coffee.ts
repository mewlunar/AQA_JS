import { Drink } from "../drink";

export abstract class Coffee extends Drink {
  protected additives: number;
  constructor(name: string, volume: number, additives: number) {
    super(name, volume);
    this.additives = additives;
  }
}
