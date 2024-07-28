import { Coffee } from "./coffee";
import {
  Additives,
  AlternativeCoffeeNames,
  DrinkVolume,
  Grain,
} from "../enums";

export class AlternativeCoffee extends Coffee {
  grain: Grain;
  constructor(
    name: AlternativeCoffeeNames,
    volume: DrinkVolume,
    additives: Additives,
    grain: Grain
  ) {
    super(name, volume, additives);
    this.grain = grain;
  }

  costBrewingMethod(name: string): number {
    let brewingCost: number = 100;
    if (name == "V60") {
      brewingCost = 120;
    } else if (name == "Wilfa") {
      brewingCost = 90;
    }
    return brewingCost;
  }

  calculatePrice(): number {
    return (
      this.price * this.volume +
      this.additives +
      this.grain +
      this.costBrewingMethod(this.name)
    );
  }

  getDrinkName(): string {
    return this.name;
  }
}
