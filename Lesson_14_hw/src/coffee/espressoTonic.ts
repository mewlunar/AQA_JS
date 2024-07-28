import { Coffee } from "./coffee";
import { Additives, CoffeeNames, DrinkVolume } from "../enums";

export class EspressoTonic extends Coffee {
  constructor(
    name: CoffeeNames.espressoTonic,
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
