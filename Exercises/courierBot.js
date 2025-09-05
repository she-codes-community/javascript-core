class Robot {
  constructor(name, battery = 5, carryLimit = 10) {
    this.name = name;
    this.battery = battery;       // range 0–10
    this.carryLimit = carryLimit; // max total weight
    this.packages = [];           // array of { name, weight }
  }

  totalWeight() {
    var sum = 0;
    for (var i = 0; i < this.packages.length; i++) {
      sum = sum + this.packages[i].weight;
    }
    return sum;
  }

  collectPackage(packageName, weight) {
    var validName = packageName !== "";
    var validWeight = typeof weight === "number" && weight > 0;
    var current = this.totalWeight();
    if (validName && validWeight && current + weight <= this.carryLimit) {
      this.packages.push({ name: packageName, weight: weight });
      if (this.battery > 0) {
        this.battery = this.battery - 1;
      }
      return this.name + " collected " + packageName + ". Status: " + (current + weight <= this.carryLimit ? "Updated" : "Too Heavy");
    } else {
      return "Too Heavy. Current weight: " + current + "/" + this.carryLimit;
    }
  }

  deliver(destination, distance) {
    this.battery = this.battery - distance;
    if (this.battery < 0) {
      this.battery = 0;
    }
    return this.name + " delivered to " + destination + ". Battery: " + this.battery;
  }

  charge(minutes) {
    var gain = (minutes - (minutes % 10)) / 10;
    this.battery = this.battery + gain;
    if (this.battery > 10) {
      this.battery = 10;
    }
    return this.name + " charged. Battery: " + this.battery + "/10";
  }

  status() {
    var batteryTag = this.battery === 10 ? " (full)" : "";
    var carryTag = this.totalWeight() === 0 ? " (empty)" : "";
    var itemList = this.packages.length > 0 ? this.packages.map(function(p) { return p.name; }).join(", ") : "none";
    return "Robot: " + this.name +
           " | Battery: " + this.battery + "/10" + batteryTag +
           " | Carry: " + this.totalWeight() + "/" + this.carryLimit + carryTag +
           " | Packages: " + itemList;
  }

  canDoMission(distance, extraWeight) {
    return this.battery >= distance && this.totalWeight() + extraWeight <= this.carryLimit;
  }

  missionScore() {
    var base = this.battery * 2 + this.packages.length * 3;
    var bonus = (this.totalWeight() / this.carryLimit) < 0.5 ? 2 : 0;
    return base + bonus;
  }
}


var r = new Robot("Zippy", 6, 12);
console.log(r.status());
console.log(r.collectPackage("Book", 3));
console.log(r.collectPackage("Laptop", 6));
console.log("Can do mission? " + r.canDoMission(4, 2));
console.log(r.deliver("Central Hub", 4));
console.log(r.charge(35));
console.log("Score: " + r.missionScore());
console.log(r.status());