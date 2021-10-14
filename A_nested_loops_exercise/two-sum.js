// Write a function `twoSum(numbers, target)` that accepts an array of numbers and a target number
// as an argument. The function should return a boolean indicating whether or not there exists a pair
// of distinct elements in the array that sum to the target.
// function twoSum(numbers, target) {
//     let element = numbers[0]
//     for (let i = 1; i < numbers.length; i++) {
//       if(element + numbers[i] === target) {
//           return true
//       }
//     }
//     return false
// }
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return true;
      } 
    }
  }
  return false;
}

console.log(twoSum([2, 3, 5, 9], 7)); // true
console.log(twoSum([2, 3, 5, 9], 4)); // false
console.log(twoSum([6, 3, 4], 10)); // true
console.log(twoSum([50, 45, 5], 110)); // false
console.log(twoSum([6, 5, 1], 10)); // false
console.log(twoSum([6, 15, 11], 21)); // true
