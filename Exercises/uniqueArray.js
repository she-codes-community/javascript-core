function uniqueArray(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let exists = false;

    // נבדוק אם הערך כבר נמצא בתוצאה
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        exists = true;
        break;
      }
    }

    // אם לא נמצא — נוסיף אותו
    if (!exists) {
      result[result.length] = arr[i];
    }
  }

  return result;
}

// Examples:
console.log(uniqueArray([1, 1, 2]));                     // [1, 2]
console.log(uniqueArray([0,0,1,1,1,2,2,3,3,4]));          // [0, 1, 2, 3, 4]
console.log(uniqueArray([5, 3, 5, 3, 2, 2, 8]));          // [5, 3, 2, 8]