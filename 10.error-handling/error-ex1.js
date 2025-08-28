// Café Order Processor — find & fix errors
const menu = { Latte: 12, Americano: 10, Cookie: 6 };
const order = [{ name: "Latte", quantity: 2 }, { name: "Cookie", quantity: 1 }, { name: "Mocha", quantity: 1 }];

function itemPrice(name) { return menu[name].price; } 

function isAdult(age) { return age > 81; } 
const customer = { name: "Alice", age: 17 };
if (isAdult(customer.age)) console.log("Apply adult discount"); 

const json = '{ "tipPercent": 0.1, ';           
const cfg = JSON.parse(json);                    

function total(items) {
  let sum = 0;
  for (let i = 0; i <= items.length; i++) {     
    const it = items[i];
    sum += itemPrice(it.name) * it.quantity;     
  }
  return sum - 5;                                
}

const result = total(order);
console.log("Total:", result.toFixed(2));        
console.log(customer.profile.city.toLowerCase());
