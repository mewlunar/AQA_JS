import { Order } from "./order";
import { Drink } from "./drink";

export class CoffeeHouse {
  private name: string;
  private address: string;
  private orders: Order[];
  private workingHours: string;
  private lastOrderId: number = 0;

  constructor(
    name: string = "Voronka",
    address: string = "Voronezh, 20-letiya Oktyabrya st. 123",
    orderId: number = 1,
    workingHours: string = "9-23"
  ) {
    this.name = name;
    this.address = address;
    this.orders = [];
    this.workingHours = workingHours;
    this.lastOrderId = orderId;
  }

  addOrder(customerPhoneNumber: number, orderItems: Drink[] = []): void {
    const newOrder = new Order(
      customerPhoneNumber,
      orderItems,
      this.setNextOrderId()
    );
    this.orders.push(newOrder);
  }

  newOrder(customerPhoneNumber: number) {
    const newOrder = new Order(customerPhoneNumber, [], this.setNextOrderId());
    this.orders.push(newOrder);
  }

  addItemByPhoneNumber(customerPhoneNumber: number, orderItem: Drink): void {
    const index = this.orders.findIndex(
      (order) => order.customerPhoneNumber === customerPhoneNumber
    );
    if (index !== -1) {
      this.orders[index].addItem(orderItem);
    } else {
      console.error(
        `Order with phone number ${customerPhoneNumber} not found.`
      );
    }
  }

  removeOrderById(id: number): void {
    const index = this.orders.findIndex((order) => order.orderId === id);
    if (index !== -1) {
      this.orders.splice(index, 1);
    } else {
      console.error(`Order with ID ${id} not found.`);
    }
  }

  removeOrderByPhoneNumber(phoneNumber: number): void {
    const index = this.orders.findIndex(
      (order) => order.customerPhoneNumber === phoneNumber
    );
    if (index !== -1) {
      this.orders.splice(index, 1);
    } else {
      console.error(`Order with phone number ${phoneNumber} not found.`);
    }
  }

  getTotalRevenue(): number {
    return this.orders.reduce((sum, order) => sum + order.getTotalPrice(), 0);
  }

  getAllOrders(): Order[] {
    return this.orders;
  }

  printOrdersInfo(): void {
    const info = this.orders.map((order) => order.getOrderInfo());
    console.log(`${info.join("; ")}
    `);
  }

  printTotalRevenue(): void {
    console.log(`Total Revenue: ${this.getTotalRevenue()}`);
  }

  getInfoAboutCoffeeHouse(): string {
    return `Welcome to ${this.name} coffee house, we delight you with our drinks at the address: ${this.address}, opening hours: ${this.workingHours} o'clocks. Thank you for your order!`;
  }

  private setNextOrderId(): number {
    return this.lastOrderId++;
  }
}
