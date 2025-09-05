class Dragon {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.color = "Unknown";
    this.energy = 5;
    this.maxEnergy = 10;
    this.power = 1;
    this.carryLimit = 15;
    this.treasures = [];
    this.equipment = [];
  }

  showDetails() {
    console.log("Name:", this.name);
    console.log("Age:", this.age);
    console.log("Color:", this.color);
  }

  breatheFire() {
    if (this.energy > 0) {
      console.log("🔥 The dragon breathes fire!");
      this.energy -= 1;
    } else {
      console.log("No energy left! You need to feed the dragon.");
    }
  }

  eat() {
    this.energy += 3;
    if (this.energy > this.maxEnergy) {
      this.energy = this.maxEnergy;
    }
    console.log("The dragon eats and regains energy.");
  }

  collectTreasure(treasureName) {
    this.treasures.push(treasureName);
  }

  showTreasures() {
    if (this.treasures.length === 0) {
      console.log("The dragon hasn't collected any treasures yet.");
    } else {
      console.log("Treasures collected:");
      for (let i = 0; i < this.treasures.length; i++) {
        console.log("- " + this.treasures[i]);
      }
    }
  }

  train(hours) {
    this.power += hours;
    this.energy -= hours * 2;
    if (this.energy < 0) {
      this.energy = 0;
    }
  }

  rest(hours) {
    this.energy += hours * 2;
    if (this.energy > this.maxEnergy) {
      this.energy = this.maxEnergy;
    }
  }

  addEquipment(name, weight) {
    if (this.totalWeight() + weight <= this.carryLimit) {
      this.equipment.push({ name: name, weight: weight });
      return true;
    }
    return false;
  }

  totalWeight() {
    let sum = 0;
    for (let i = 0; i < this.equipment.length; i++) {
      sum += this.equipment[i].weight;
    }
    return sum;
  }

  canDoMission(requiredPower, energyCost) {
    return this.power >= requiredPower && this.energy >= energyCost;
  }

  doMission(requiredPower, energyCost, rewardName, rewardWeight) {
    if (this.canDoMission(requiredPower, energyCost)) {
      this.energy -= energyCost;
      this.collectTreasure(rewardName);
      let added = this.addEquipment(rewardName, rewardWeight);
      if (added) {
        return "Mission completed successfully! Both treasure and equipment collected.";
      } else {
        return "Mission completed! Treasure collected, but the equipment was too heavy.";
      }
    } else {
      return "Not enough power/energy for the mission.";
    }
  }

  getStatusReport() {
    let report = "Dragon: " + this.name + "\n";
    report += "Age: " + this.age + "\n";
    report += "Power: " + this.power + "\n";
    report += "Energy: " + this.energy + "/" + this.maxEnergy;
    report += (this.energy === this.maxEnergy ? " (full)" : "") + "\n";
    report += "Carry: " + this.totalWeight() + "/" + this.carryLimit;
    report += (this.totalWeight() === 0 ? " (empty)" : "") + "\n";
    report += "Treasures: " + (this.treasures.length > 0 ? this.treasures.join(", ") : "none") + "\n";
    report += "Equipment: " + (this.equipment.length > 0 ? this.equipment.map(e => e.name).join(", ") : "none");
    return report;
  }
}


let myDragon = new Dragon("Flare", 3);

myDragon.train(2);
myDragon.rest(1);

console.log("Power:", myDragon.power);
console.log("Energy:", myDragon.energy);

console.log("Light armor added:", myDragon.addEquipment("Light Armor", 5));
console.log("Heavy hammer added:", myDragon.addEquipment("Heavy Hammer", 12));

console.log(myDragon.doMission(3, 4, "Golden Goblet", 6));
myDragon.showTreasures();
console.log("Total weight:", myDragon.totalWeight());

console.log("\n--- Status Report ---");
console.log(myDragon.getStatusReport());