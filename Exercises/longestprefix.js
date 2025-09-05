function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  let prefix = "";
  let first = strs[0];

  for (let i = 0; i < first.length; i++) {
    let currentChar = first[i];

    // נבדוק אם כל שאר המחרוזות מכילות את התו הזה באותו מיקום
    for (let j = 1; j < strs.length; j++) {
      let word = strs[j];
      let compareChar = word.length > i ? word[i] : null;

      if (compareChar !== currentChar) {
        return prefix;
      }
    }

    prefix += currentChar;
  }

  return prefix;
}


// Example 1:
console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"

// Example 2:
console.log(longestCommonPrefix(["dog","racecar","car"])); // Output: ""