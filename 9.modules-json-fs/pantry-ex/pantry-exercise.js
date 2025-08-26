// utils/messages.js should contain:
greet("Chef");
// Expected: "Hello, Chef!"

info("Pantry is ready");
// Expected: "[INFO] Pantry is ready"

warn("Low stock");
// Expected: "[WARN] Low stock"

// utils/math.js should contain:
add(2, 3);
// Expected: 5

subtract(9, 4);
// Expected: 5

clamp(10, 0, 5); // Expected: 5   (above max → returns max)
clamp(-2, 0, 5); // Expected: 0   (below min → returns min)
clamp(3,  0, 5); // Expected: 3   (in range → returns x)


// pantry.js should contain:
// initial pantry
[
  { name: "Salt",   quantity: 2, group: "spices" },
  { name: "Pepper", quantity: 0, group: "spices" },
  { name: "Pasta",  quantity: 5, group: "pasta"  },
  { name: "Tomato", quantity: 1, group: "canned" }
]

listPantry();
// Expected:
// [
//   { name: "Salt",   quantity: 2, group: "spices" },
//   { name: "Pepper", quantity: 0, group: "spices" },
//   { name: "Pasta",  quantity: 5, group: "pasta"  },
//   { name: "Tomato", quantity: 1, group: "canned" }
// ]


consumeItem("Salt", 1);
// Expected: true
// Side effect: Salt.quantity decreases from 2 to 1

consumeItem("Pepper", 1);
// Expected: false (Pepper.quantity = 0)

consumeItem("Tomato", 2);
// Expected: false (Tomato.quantity = 1 < 2 required)

lowStock(1);
// Expected (with initial stock):
// [
//   { name: "Pepper", quantity: 0, group: "spices" },
//   { name: "Tomato", quantity: 1, group: "canned" }
// ]

// orders.js should contain:
// example orders:
const orders = [
  { dish: "Pasta Arrabiata", needs: [ { name: "Pasta", quantity: 1 }, { name: "Tomato", quantity: 1 } ] },
  { dish: "Pepper Omelette", needs: [ { name: "Eggs",  quantity: 2 }, { name: "Pepper", quantity: 1 } ] }, // Eggs not in stock
  { dish: "Salted Pasta",    needs: [ { name: "Pasta", quantity: 1 }, { name: "Salt",   quantity: 1 } ] }
];

fulfillOrders(orders);
// Expected (with initial inventory):
// - "Pasta Arrabiata": can be fulfilled → counted
// - "Pepper Omelette": cannot be fulfilled (Eggs missing, Pepper=0) → not counted
// - "Salted Pasta": can be fulfilled → counted
// Return value: 2

const report = buildShoppingReport();
console.log(report);

// Expected format (example):
// "[REPORT] Low-stock items:
// - Pepper: have 0, recommend buying 5
// - Tomato: have 0, recommend buying 5
// - Salt: have 1, recommend buying 4"
// Exact numbers may vary depending on how you calculate recommendations with clamp,
// and the state of the pantry after running fulfillOrders.


// main.js: expected flow (illustrative):
// Hello, Chef!
// [INFO] Pantry (before):
// [ ...initial pantry... ]
// [INFO] Fulfilled orders: 2
// [INFO] Pantry (after):
// [ ...updated pantry... ]
// [WARN] Some items are low! See report below.
// [REPORT] Low-stock items:
// - Pepper: have 0, recommend buying 5
// - Tomato: have 0, recommend buying 5
// - Salt: have 1, recommend buying 4
