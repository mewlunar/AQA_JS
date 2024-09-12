import { Coffee } from "./coffee";
import { Additives, CoffeeNames, DrinkVolume } from "../enums";

export class Bumble extends Coffee {
  constructor(
    name: CoffeeNames.bumble,
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
