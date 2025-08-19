function calculateTotal(cups, pricePerCup, hasCoupon) {
  if (cups < 0) { cups = 0; }
  if (pricePerCup < 0) { pricePerCup = 0; }

  var subtotal = cups * pricePerCup;

  var discount = 0;
  if (hasCoupon === true) {
    discount = subtotal * 0.20; // 20% off
  }

  var total = subtotal - discount;

  return subtotal;
}

var a = calculateTotal(3, 10, false); 
var b = calculateTotal(3, 10, true); 

console.log("No coupon:", a);
console.log("With coupon:", b);

