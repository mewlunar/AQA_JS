import { Drink } from "./drink";

export class Order {
  customerPhoneNumber: number;
  orderItems: Drink[] = [];
  orderId: number;
  dateTime: string;
  private totalPrice: number;

  constructor(
    customerPhoneNumber: number,
    orderItems: Drink[] = [],
    orderId: number = 0
  ) {
    this.customerPhoneNumber = customerPhoneNumber;
    this.orderItems = orderItems;
    this.dateTime = this.setDateTime();
    this.orderId = orderId;
    this.totalPrice = this.calculateTotalPrice();
  }

  getOrderInfo(): string {
    const drinkNames = this.orderItems.map((drink) => drink.getDrinkName());
    const info = `
    \n 
    Customer phone number: ${this.customerPhoneNumber}, \n\
    Drinks in order: ${drinkNames.join(", ")}
    Order ID: ${this.orderId}, \n\
    Order creation time:${this.dateTime}, \n\
    Order price: ${this.totalPrice}`;
    return info;
  }

  addItem(item: Drink): void {
    this.orderItems.push(item);
    this.totalPrice = this.calculateTotalPrice();
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }

  getOrderId(): number {
    return this.orderId;
  }

  getDateTime(): string {
    return this.dateTime;
  }

  private setDateTime(): string {
    return new Date().toISOString();
  }

  private calculateTotalPrice(): number {
    return this.orderItems.reduce(
      (total, item) => total + item.calculatePrice(),
      0
    );
  }
}
