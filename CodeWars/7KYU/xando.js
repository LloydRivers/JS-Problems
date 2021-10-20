// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

function XO(str) {
    let countX = 0
    let countO = 0 
    let words = str.toLowerCase().split('')
    for (let i = 0; i < words.length; i++){
        if(words[i] === 'x') {
            countX +=1
        } else if (words[i] === 'o') {
        countO +=1
        }
    }
    if(countO === countX) {
        return true 
    } else {
        return false 
    }
}

console.log(XO("ooxx"))
console.log(XO("xooxx"))
console.log(XO("ooxXm"))
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false