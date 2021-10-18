// I have an idea for a challenge.
// Without using built in interators, create a function that accepts two arguments (min and rangeOfNumbers). The function should generate and return a number NOT less than the min number and NOT included in the range of numbers.

function interators(min, rangeOfNumbers) {
    let arr = []
    let number = Math.floor(Math.random() * min) + min
    if(!rangeOfNumbers.includes(number)) {
     arr.push(number)
    } else {
        return 'Number not allowed'
    }
    return arr
}

console.log(interators(30, [5,10,20, 100]))
