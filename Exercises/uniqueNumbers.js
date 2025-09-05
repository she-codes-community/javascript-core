function singleNumber(nums) {
  const seen = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let found = false;

    // בדוק אם המספר כבר נמצא במערך seen
    for (let j = 0; j < seen.length; j++) {
      if (seen[j] === num) {
        // אם נמצא — נסיר אותו ידנית
        for (let k = j; k < seen.length - 1; k++) {
          seen[k] = seen[k + 1];
        }
        seen.length = seen.length - 1;
        found = true;
        break;
      }
    }

    // אם לא נמצא — נוסיף אותו
    if (!found) {
      seen[seen.length] = num;
    }
  }

  // בסוף יישאר רק מספר אחד
  return seen[0];
}

// Examples:
console.log(singleNumber([2, 2, 1]));       // 1
console.log(singleNumber([4, 10000, 2, 10000, 10000, 2])); // 4
console.log(singleNumber([1]));             // 1