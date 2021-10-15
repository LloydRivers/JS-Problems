// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(arr) {
    let numbers = arr.split(' ')
    return Math.max.apply(null, numbers) + " " +  Math.min.apply(null, numbers)
}

// Example:

console.log(highAndLow("1 2 3 4 5"));  // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"