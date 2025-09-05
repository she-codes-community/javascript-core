function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

//Examples
console.log(isPalindrome("Level"));        // true  
console.log(isPalindrome("Abba"));         // true  
console.log(isPalindrome("MadamImAdam"));  // true  
console.log(isPalindrome("HelloWorld"));   // false  