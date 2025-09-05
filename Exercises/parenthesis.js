function isValid(s) {
  let balance = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      balance++;
    } else {
      if (balance === 0) return false;
      balance--;
    }
  }

  return balance === 0;
}

// Examples:
console.log(isValid("()"));        // true
console.log(isValid("()()()"));    // true
console.log(isValid("("));        // false
console.log(isValid("())"));      // false
console.log(isValid("(())"));      // true


function isValidAdvanced(s) {
  let changed = true;

  // כל עוד הסרנו זוגות בשלב הקודם
  while (changed) {
    changed = false;
    let tmp = "";

    for (let i = 0; i < s.length; i++) {
      const a = s[i];
      const b = s[i + 1];

      // אם מצאנו זוג תואם – נדלג עליו
      if (
        i + 1 < s.length &&
        (
          (a === "(" && b === ")") ||
          (a === "[" && b === "]") ||
          (a === "{" && b === "}")
        )
      ) {
        i++;         // דילוג על שני התווים
        changed = true;
      } else {
        tmp += a;    // מצרפים תו שלא נמחק
      }
    }

    s = tmp;         // משתמשים במחרוזת המעודכנת
  }

  // רק אם כל הזוגות הוסרו – המחרוזת תקינה
  return s.length === 0;
}

// Examples:
console.log(isValidAdvanced("()"));       // true
console.log(isValidAdvanced("()[]{}"));   // true
console.log(isValidAdvanced("(]"));       // false
console.log(isValidAdvanced("([)]"));     // false
console.log(isValidAdvanced("{[]}"));     // true