class Product {
  constructor(name, price) {
    this.name = name;
    this.prize = price;
  }
}

class Cart {
  constructor() { this.items = []; }
  add(p) { this.items[this.items.length] = p; }
  total() {
    var sum = 0;
    for (var i = 0; i < this.items.length; i = i + 1) {
      sum = sum + this.items[i].price; 
    }
    return sum;
  }
}

// Demo
var p1 = new Product("Juice", 8);
var p2 = new Product("Sandwich", 12);
var cart = new Cart();
cart.add(p1); cart.add(p2);
console.log("Total:", cart.total()); 
