import {
  Additives,
  CoffeeWithMilkNames,
  DrinkVolume,
  Milk,
  Toppings,
} from "../enums";
import { CoffeeWithMilk } from "./coffeeWithMilk";

export class FlatWhite extends CoffeeWithMilk {
  constructor(
    name: CoffeeWithMilkNames.flatWhite,
    volume: DrinkVolume,
    additives: Additives,
    toppings: Toppings,
    milk: Milk
  ) {
    super(name, volume, additives, toppings, milk);
  }

  calculatePrice(): number {
    return (
      this.price * this.volume + this.additives + this.toppings + this.milk
    );
  }

  getDrinkName(): string {
    return this.name;
  }
}
