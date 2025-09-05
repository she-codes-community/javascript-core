function isSubstring(needle, haystack) {
  var m = needle.length;
  if (m === 0) return true;

  var n = haystack.length;
  if (n < m) return false;

  for (var i = 0; i <= n - m; i++) {
    var j = 0;
    while (j < m && haystack[i + j] === needle[j]) {
      j++;
    }
    if (j === m) {
      return true;
    }
  }

  return false;
}

// More compact version using indexOf
function isSubstringCompact(needle, haystack) {
  return haystack.indexOf(needle) !== -1;
}

// Examples
console.log(isSubstring("needle", "haystack"));               // false  
console.log(isSubstring("needle", "find a needle here"));     // true   
console.log(isSubstring("", "anything"));                      // true   
console.log(isSubstring("long", "short"));                     // false  