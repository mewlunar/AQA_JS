import { Coffee } from "./coffee";

export abstract class CoffeeWithMilk extends Coffee {
  toppings: number;
  milk: number;

  constructor(
    name: string,
    volume: number,
    additives: number,
    toppings: number,
    milk: number
  ) {
    super(name, volume, additives);
    this.toppings = toppings;
    this.milk = milk;
  }
}
