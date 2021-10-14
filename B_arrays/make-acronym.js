// Write a function `makeAcronym` that accepts a sentence string as an argument. The function should
// return a string containing the first character of each word in the sentence.

function makeAcronym(str) {
    let string = ''; // This will be returned
    let words = str.split(' ') // split() it splits a string into an array
        for (let i = 0; i < words.length; i++) {
        string += words[i][0]
        // console.log(words[i][0])
        // console.log(words) // this will give us back an array
        // console.log(words[i])
    }
    return string.toUpperCase() 
}



console.log(makeAcronym("New York")); // NY
console.log(makeAcronym("same stuff different day")); // SSDD
console.log(makeAcronym("Laugh out loud")); // LOL
console.log(makeAcronym("don't over think stuff")); // DOTS