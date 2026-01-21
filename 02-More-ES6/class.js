class products {
  constructor(name, price, brand) {
    this.name = name;
    this.price = price;
    this.brand = brand;
  }
  getPrice() {
    return this.price;
  }
  discount(amount) {
    this.price -= amount;
  }
}

const apple = new products("Iphone 15 pro", 150000, "Apple");
console.log(apple);
apple.discount(100000);
console.log(apple.getPrice());

const HP = new products("HP G3", 70000, "HP");
console.log(HP);
HP.discount(20000);
console.log(HP.getPrice());
