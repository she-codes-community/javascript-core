function missingNumber(nums) {
  let n = nums.length;
  let expectedSum = n * (n + 1) / 2;
  let actualSum = 0;

  for (let i = 0; i < n; i++) {
    actualSum += nums[i];
  }

  return expectedSum - actualSum;
}

// Examples:
console.log(missingNumber([3, 0, 1]));       // 2
console.log(missingNumber([0, 1]));          // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // 8