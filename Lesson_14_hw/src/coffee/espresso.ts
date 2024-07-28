import { Coffee } from "./coffee";
import { Additives, CoffeeNames, DrinkVolume } from "../enums";

export class Espresso extends Coffee {
  constructor(
    name: CoffeeNames.espresso,
    volume: DrinkVolume,
    additives: Additives
  ) {
    super(name, volume, additives);
  }

  calculatePrice(): number {
    return this.price * this.volume + this.additives;
  }

  getDrinkName(): string {
    return this.name;
  }
}
