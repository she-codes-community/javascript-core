function toAlternatingCase(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    // אם התו שווה לגרסה הקטנה שלו — סימן שהוא קטן
    if (ch === ch.toLowerCase()) {
      result += ch.toUpperCase();
    } else {
      result += ch.toLowerCase();
    }
  }

  return result;
}

// Examples:
console.log(toAlternatingCase("Hello World"));     // hELLO wORLD
console.log(toAlternatingCase("JavaScript"));      // jAVAsCRIPT
console.log(toAlternatingCase("123ABCabc!"));      // 123abcABC!
console.log(toAlternatingCase(""));                // (empty string)
console.log(toAlternatingCase("ALL CAPS"));        // all caps