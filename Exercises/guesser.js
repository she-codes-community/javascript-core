class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    if (this.lives <= 0) {
      console.log("Error- No lives left!");
      return;
    }

    this.lives = this.lives - 1;

    if (n === this.number) {
      return true;
    }

    return false;
  }
}

// Example 1 — correct guess on first try
let g1 = new Guesser(5, 3);
console.log(g1.guess(5)); // true
console.log(g1.lives);    // 2 (lost one life for the guess)

// Example 2 — wrong guess, then correct guess
let g2 = new Guesser(7, 2);
console.log(g2.guess(3)); // false
console.log(g2.lives);    // 1
console.log(g2.guess(7)); // true
console.log(g2.lives);    // 0

// Example 3 — using up all lives
let g3 = new Guesser(10, 2);
console.log(g3.guess(1)); // false
console.log(g3.guess(5)); // false
console.log(g3.guess(10)); // Error- No lives left!