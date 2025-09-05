// Short Practice: CourierBot
// Goals: classes, functions, if, operators, arrays/loops, and string concatenation with + only.
class CourierBot {
  constructor(name, battery = 5, carryLimit = 10) {
    this.name = name;
    this.battery = battery;       // range 0–10
    this.carryLimit = carryLimit; // maximum total weight the bot can carry
    this.cargo = [];              // array of items: [{ name, weight }]
  }

  totalWeight() {
    var sum = 0;
    for (var i = 0; i < this.cargo.length; i++) {
      sum = sum + this.cargo[i].weight;
    }
    return sum;
  }

  // TODO 1: pick(itemName, weight)
  // Requirements:
  // - Validate inputs: itemName is a non-empty string; weight is a number > 0.
  // - Check if totalWeight() + weight <= carryLimit.
  //   If YES: push { name: itemName, weight: weight } into this.cargo
  //           and reduce battery by 1 (battery--) only if battery > 0.
  //   If NO: do nothing to cargo/battery.
  // - Return a status string using + only and a ternary (?:), e.g.:
  //   Success: this.name + " picked " + itemName + ". Carry: " + current + "/" + this.carryLimit
  //   Failure: "Too heavy. Carry: " + current + "/" + this.carryLimit
  pick(itemName, weight) {
    // YOUR CODE HERE
    return "TODO_pick";
  }

  // TODO 2: deliver(city, distance)
  // Requirements:
  // - Reduce battery by distance: battery = battery - distance.
  // - If battery goes below 0, set it to 0 (use if, not Math.min/Math.max).
  // - Return a status string: this.name + " delivered to " + city + ". Battery: " + this.battery
  deliver(city, distance) {
    // YOUR CODE HERE
    return "TODO_deliver";
  }

  // TODO 3: charge(minutes)
  // Requirements:
  // - Every 10 minutes of charging gives +1 battery.
  //   Hint for integer gain without Math.floor:
  //   var gain = (minutes - (minutes % 10)) / 10;
  // - Cap battery at 10 using if.
  // - Return a status string describing the new battery level.
  charge(minutes) {
    // YOUR CODE HERE
    return "TODO_charge";
  }

  // TODO 4: status()
  // Requirements:
  // - Return a single-line status string using + only and at least one ternary (?:).
  //   Example idea (not code): "Bot: NAME | Battery: B/10(...) | Carry: W/LIMIT(...) | Items: ..."
  //   where "(full)" could appear when battery===10 and "(empty)" when total weight is 0.
  status() {
    // YOUR CODE HERE
    return "TODO_status";
  }

  // TODO 5: canDoMission(bot, distance, extraWeight)
  // Requirements:
  // - Return true/false based on BOTH conditions (use &&):
  //   1) bot.battery >= distance
  //   2) bot.totalWeight() + extraWeight <= bot.carryLimit
  // - No printing; return a boolean only.
  canDoMission(distance, extraWeight) {
    // YOUR CODE HERE
    return false; // placeholder
  }

  // TODO 6: missionScore(bot)
  // Requirements:
  // - Compute and return a numeric score using operators:
  //   Base: bot.battery * 2 + bot.cargo.length * 3
  //   Bonus: add +2 if (totalWeight / carryLimit) < 0.5, else +0 (use a ternary ?:).
  // - No printing; return a number.
  missionScore() {
    // YOUR CODE HERE
    return 0; // placeholder
  }
}

/* Quick checks (optional; run after you implement the TODOs)
var b = new CourierBot("Dot", 6, 12);
console.log(b.status());
console.log(b.pick("Book", 3));
console.log(b.pick("Laptop", 6));
console.log("Can take mission? " + canTakeMission(b, 4, 2));
console.log(b.deliver("Central Library", 4));
console.log(b.charge(35));
console.log("Score: " + missionScore(b));
console.log(b.status());
*/
