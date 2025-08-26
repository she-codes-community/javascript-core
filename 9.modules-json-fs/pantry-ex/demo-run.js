/**
 * demo_run.js — run this file to sanity-check a full flow that uses all modules.
 * Assumptions:
 * - package.json at project root contains: { "type": "module" }
 * - Files exist: pantry.js, orders.js, report.js, utils/messages.js, utils/math.js
 * - Initial inventory inside pantry.js (example used below):
 *   [
 *     { name: "Salt",   quantity: 2, group: "spices" },
 *     { name: "Pepper", quantity: 0, group: "spices" },
 *     { name: "Pasta",  quantity: 5, group: "pasta"  },
 *     { name: "Tomato", quantity: 1, group: "canned" }
 *   ]
 *
 * Notes:
 * - Comments show EXPECTED results given the initial inventory above.
 * - If your starting inventory differs, your numbers will differ accordingly.
 */

import greet, { info, warn } from "./utils/messages.js";     // default + named
import * as math from "./utils/math.js";                     // namespace import
import { add as sum } from "./utils/math.js";                // alias import
import { listPantry, consumeItem, lowStock } from "./pantry.js";
import { fulfillOrders } from "./orders.js";
import { buildShoppingReport } from "./report.js";

// Helper for pretty printing
const pp = (x) => JSON.stringify(x, null, 2);

// 1) Greeting (default export)
console.log(greet("Chef"));
// Expected: "Hello, Chef!"

// 2) Pantry BEFORE
console.log(info("Pantry (before):"));
console.log(pp(listPantry()));
// Expected (with the assumed initial inventory):
// [
//   { "name": "Salt",   "quantity": 2, "group": "spices" },
//   { "name": "Pepper", "quantity": 0, "group": "spices" },
//   { "name": "Pasta",  "quantity": 5, "group": "pasta"  },
//   { "name": "Tomato", "quantity": 1, "group": "canned" }
// ]

// 3) Demonstrate a failing consume (won't change inventory)
console.log(info('Try to consume 2 "Tomato" (only 1 available):'));
console.log("consumeItem('Tomato', 2) ->", consumeItem("Tomato", 2));
// Expected: false

// 4) Low-stock snapshot BEFORE orders
console.log(info("Low-stock items (threshold=1) before orders:"));
console.log(pp(lowStock(1)));
// Expected: Pepper (0), Tomato (1)

// 5) Some math demos (namespace + alias)
console.log(info("Math checks:"));
console.log("math.add(2,3) =", math.add(2, 3));     // Expected: 5
console.log("sum(10,5) =", sum(10, 5));             // Expected: 15 (alias for add)
console.log("math.clamp(10, 0, 5) =", math.clamp(10, 0, 5)); // Expected: 5

// 6) Define orders and fulfill them
const orders = [
  { dish: "Pasta Arrabiata", needs: [ { name: "Pasta", quantity: 1 }, { name: "Tomato", quantity: 1 } ] },
  { dish: "Pepper Omelette", needs: [ { name: "Eggs",  quantity: 2 }, { name: "Pepper", quantity: 1 } ] }, // Eggs missing, Pepper=0
  { dish: "Salted Pasta",    needs: [ { name: "Pasta", quantity: 1 }, { name: "Salt",   quantity: 1 } ] }
];

const fulfilledCount = fulfillOrders(orders);
console.log(info("Fulfilled orders: " + fulfilledCount));
// Expected (with the assumed initial inventory): 2
// Explanation:
//   - "Pasta Arrabiata": Pasta 5→4, Tomato 1→0 → fulfilled
//   - "Pepper Omelette": Eggs missing (and Pepper=0) → NOT fulfilled
//   - "Salted Pasta":    Pasta 4→3, Salt 2→1 → fulfilled

// 7) Pantry AFTER
console.log(info("Pantry (after orders):"));
console.log(pp(listPantry()));
// Expected changes from initial (given the above flow):
//   Salt:   2 → 1
//   Pepper: 0 → 0
//   Pasta:  5 → 3
//   Tomato: 1 → 0

// 8) Low-stock snapshot AFTER orders
console.log(info("Low-stock items (threshold=1) after orders:"));
console.log(pp(lowStock(1)));
// Expected: Pepper (0), Tomato (0), and possibly Salt (1)

// 9) Build a shopping report
const report = buildShoppingReport();
if (report.includes("Low-stock")) {
  console.log(warn("Some items are low! See report below."));
}
console.log(report);
// Expected shape (example):
// [REPORT] Low-stock items:
// - Pepper: have 0, recommend buying 5
// - Tomato: have 0, recommend buying 5
// - Salt: have 1, recommend buying 4

// 10) Final sanity line
console.log(info("Demo flow complete."));
