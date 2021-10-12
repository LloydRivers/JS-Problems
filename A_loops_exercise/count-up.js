// Write a function `countUp(max)` that accepts a max number as an argument. The function should print
// all numbers from 1 up to and including the max. The function doesn't need to return any value. It
// should just print to the terminal.
function countUp(max) {
    for (let i = 1; i <= max; i++) {
        console.log(i)
    }
}

countUp(5);
// prints
//  1
//  2
//  3
//  4
//  5

console.log("<<<< BREAK >>>>")

countUp(3);
// prints
//  1
//  2
//  3