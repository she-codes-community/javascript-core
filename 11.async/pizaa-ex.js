const pizzaDelivery = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Pizza arrived!");
    } else {
      reject("No pizza, sorry :(");
    }
  }, 2000);
});

pizzaDelivery
  .then(message => console.log("Success:", message))
  .catch(error => console.log("Failure:", error));