function maxProfit(prices) {
  let minPrice = prices[0];   // המחיר הכי נמוך שנראה עד כה
  let maxProfit = 0;          // הרווח הכי טוב שנמצא

  for (let i = 1; i < prices.length; i++) {
    let currentPrice = prices[i];

    // אם המחיר הנוכחי נמוך יותר — נעדכן את מחיר הקנייה
    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    }

    // נחשב את הרווח האפשרי אם נמכור היום
    let profit = currentPrice - minPrice;

    // אם הרווח הזה גבוה מהרווח הקודם — נעדכן
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
}

// Examples:
console.log(maxProfit([7,1,5,3,6,4])); // 5  (buy at 1, sell at 6)
console.log(maxProfit([7,6,4,3,1]));   // 0  (no profit possible)