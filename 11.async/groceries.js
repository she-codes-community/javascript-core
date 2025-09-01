function buyGroceries() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["pasta", "tomato", "basil"]), 1200);
  });
}

function cookMeal(ingredients) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Meal is ready with " + ingredients.join(", ")), 800);
  });
}

function cleanupKitchen() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Kitchen cleaned"), 300);
  });
}
