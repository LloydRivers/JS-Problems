// Write a function `lengthiestWord` that accepts a sentence string as an argument. The function should
// return the longest word of the sentence. If there is a tie, return the word that appears later 
// in the sentence.

function lengthiestWord(str) {
    let words = str.split(' ');
    let first = words[0];
    // console.log(first)
    for (let i = 1; i < words.length; i++) {
       if (words[i].length >= first.length ) {
          first = words[i]
       }
    }
    return first
}

console.log(lengthiestWord("I am pretty hungry")); // 'hungry'
console.log(lengthiestWord("we should think outside of the box")); // 'outside'
console.log(lengthiestWord("down the rabbit hole")); // 'rabbit'
console.log(lengthiestWord("simmer down")); // 'simmer'