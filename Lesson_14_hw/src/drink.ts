export abstract class Drink {
  protected name: string;
  protected price: number = 70;
  protected volume: number;

  constructor(name: string, volume: number) {
    this.name = name;
    this.volume = volume;
  }

  abstract calculatePrice(): number;
  abstract getDrinkName(): string;
}
