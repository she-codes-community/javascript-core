function lengthOfLastWord(s) {
  let i = s.length - 1;
  let count = 0;

  // 1. Skip trailing spaces
  while (i >= 0 && s[i] === ' ') {
    i--;
  }

  // 2. Count letters of the last word
  while (i >= 0 && s[i] !== ' ') {
    count++;
    i--;
  }

  return count;
}

// with trim and split
function lengthOfLastWord2(s) {
  // 1. Remove trailing spaces
  const trimmed = s.trim();
  // 2. If the string is now empty, there’s no word
  if (trimmed === "") return 0;
  // 3. Split on spaces and take the last segment
  const parts = trimmed.split(" ");
  return parts[parts.length - 1].length;
}



// Examples:
console.log(lengthOfLastWord("Hello World"));            // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy"));  // 6
console.log(lengthOfLastWord("a"));                      // 1
console.log(lengthOfLastWord("   "));                    // 0