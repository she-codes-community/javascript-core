// TODO: Implement the asynchronous functions here

// Flow example (sequential):
console.log("Start order");

checkStock("vanilla", () => {
  console.log("Stock OK");
  makeIceCream("vanilla", () => {
    console.log("Ice cream ready");
    chargeCustomer(12, () => {
      console.log("Payment complete");
      console.log("Order complete");
    });
  });
});

console.log("Continue doing other things...");