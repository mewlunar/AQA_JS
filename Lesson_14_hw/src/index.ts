import { CoffeeHouse } from "./coffeeHouse";
import { AlternativeCoffee } from "./coffee/alternativeCoffee";
import {
  Additives,
  AlternativeCoffeeNames,
  CoffeeNames,
  CoffeeWithMilkNames,
  DrinkVolume,
  Grain,
  Milk,
  Toppings,
} from "./enums";
import { Bumble } from "./coffee/bumble";
import { Raf } from "./coffee/raf";
import { Drink } from "./drink";

const coffeeOne = new AlternativeCoffee(
  AlternativeCoffeeNames.v60,
  DrinkVolume.m,
  Additives.none,
  Grain.brazil
);
const coffeeTwo = new Bumble(
  CoffeeNames.bumble,
  DrinkVolume.m,
  Additives.sugar
);
const coffeeThree = new Raf(
  CoffeeWithMilkNames.raf,
  DrinkVolume.xl,
  Additives.cinnamon,
  Toppings.coconut,
  Milk.banana
);
const coffeeHouse = new CoffeeHouse();
const drinksList: Drink[] = [coffeeOne, coffeeThree];
coffeeHouse.addOrder(8933, drinksList);
coffeeHouse.newOrder(9900);
coffeeHouse.addItemByPhoneNumber(9900, coffeeTwo);
coffeeHouse.addItemByPhoneNumber(9900, coffeeOne);
coffeeHouse.addItemByPhoneNumber(9900, coffeeThree);
coffeeHouse.addItemByPhoneNumber(9900, coffeeOne);
coffeeHouse.printOrdersInfo();
console.log(coffeeHouse.getInfoAboutCoffeeHouse());
coffeeHouse.printTotalRevenue();
