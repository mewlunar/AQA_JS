// 1. Создайте корзину в интернет магазине!
//     Создайте объект shoppingCart и его интерфейс!:
//       items (array of products), each product should have:
//         id (number)
//         name (string)
//         price (number)
//         quantity (number)
//     Добавьте методы к этому объекту:

//     addItem(item) - Adds a new item to the cart.
//     removeItem(id) - Removes an item from the cart by its id.
//     getTotalPrice() - Returns the total price of the items in the cart.
//     checkout() - Empties the cart and returns the total price.

interface iItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface IShoppingCart {
  items: iItem[];
  addItem(item: iItem): void;
  removeItem(id: number): void;
  getTotalPrice(): number;
  checkout(): number;
  getItemIndexById(id: number): number;
}

const cart: IShoppingCart = {
  items: [
    { id: 1, name: "Laptop", price: 1000, quantity: 1 },
    { id: 2, name: "Phone", price: 500, quantity: 2 },
  ],
  addItem(item: iItem) {
    this.items.push(item);
  },
  removeItem(id: number) {
    const itemIndex = this.getItemIndexById(id);
    if (itemIndex === -1) {
      console.log(`Cannot remove from cart, no item with id ${id}`);
    } else {
      this.items.splice(itemIndex, 1);
    }
  },
  getTotalPrice() {
    return this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  },
  checkout() {
    const totalPrice = this.getTotalPrice();
    this.items = [];
    return totalPrice;
  },
  getItemIndexById(id: number) {
    return this.items.findIndex((item) => item.id === id);
  },
};

cart.addItem({ id: 3, name: "Tablet", price: 500, quantity: 2 });
console.log("Total price: " + cart.getTotalPrice());
console.log(cart.items);
cart.removeItem(2);
console.log(cart.items);
console.log("To pay: " + cart.checkout());
console.log(cart.items);
