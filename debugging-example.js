// Story: Lemonade Stand
// Goal: calculate total price with an optional coupon discount.
// This code contains a bug that needs to be fixed.

function calculateTotal(cups, pricePerCup, hasCoupon) {
  if (cups < 0) { cups = 0; }
  if (pricePerCup < 0) { pricePerCup = 0; }

  var subtotal = cups * pricePerCup;

  if (hasCoupon = true) {          
    var discount = subtotal * 0.20;  
    subtotal = subtotal - discount;
  }

  return subtotal;
}

var cups = 3;
var price = 10;
var useCoupon = false;

var total = calculateTotal(cups, price, useCoupon);
console.log("Total to pay:", total);
