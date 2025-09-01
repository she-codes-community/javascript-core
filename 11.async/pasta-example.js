function boilPasta() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pasta ready");
    }, 2000);
  });
}

async function cookMeal() {
  try {
    const pasta = await boilPasta();
    console.log(pasta);

    const sauce = "Sauce ready";
    console.log(sauce);

    const meal = "Meal ready!";
    console.log(meal);
  } catch (err) {
    console.log("Error:", err);
  }
}

cookMeal();
