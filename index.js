function hasTargetSum(array, target) {
  // We'll use a Set to keep track of numbers we've seen so far
  const seenNumbers = new Set();

  for (let num of array) {
    const complement = target - num;
    // If the complement exists in the set, we've found a pair
    if (seenNumbers.has(complement)) {
      return true;
    }
    // Otherwise, add the current number to the set
    seenNumbers.add(num);
  }
  // If no pair found, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Time complexity: O(n), where n is the length of the array.
  Space complexity: O(n) for the set.
*/

/* 
  Add your pseudocode here

  - Create an empty set to store numbers we've seen.
  - For each number in the array:
      - Calculate the complement (target - current number).
      - If the complement is in the set, return true.
      - Otherwise, add the current number to the set.
  - If no pair is found, return false.
*/

/*
  Add written explanation of your solution here

  The function iterates through the array, and for each number, checks if there is another number we've already seen such that together they add up to the target. 
  We use a set to store numbers we've seen so far for quick lookup. If we find such a pair, we return true. If we finish the loop without finding a pair, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  // Additional test cases
  console.log("");
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 10)); // empty array

  console.log("");
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([5], 5)); // single element

  console.log("");
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([0, 0], 0)); // pair of zeros

  console.log("");
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-2, 10, 4, 8], 6)); // negative number
}

module.exports = hasTargetSum;