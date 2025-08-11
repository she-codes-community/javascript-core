// Goal: sum prices of in-stock items and list their names.

var names = ["Sandwich", "Juice", "Bar", "Salad"];
var prices = [12, 8, 5, 10];
var inStock = [true, false, true, true];

function checkout(names, prices, inStock) {
  var total = 0;
  var selected = new Array(names.length);
  var selectedCount = 0;

  for (var i = 0; i < names.length; i++) {
    total = 0;
    if (inStock[i] === true) {
      selected[selectedCount] = names[i];
      selectedCount = selectedCount + 1;
      total = total + prices[i];
    }
  }

  // Build a comma-separated list of selected items
  var list = "";
  for (var j = 0; j < selectedCount; j = j + 1) {
    list = list + selected[j];
    if (j < selectedCount - 1) { list = list + ", "; }
  }

  console.log("Selected:", list);
  console.log("Total:", total);
  return total;
}

checkout(names, prices, inStock);
// Expected (after fix): Selected: Sandwich, Bar, Salad | Total: 27
// Actual (with bug):   Selected: Sandwich, Bar, Salad | Total: 10
