// Write a function `mostLetterWord` that accepts a sentence string and a character as arguments.
// The function should return the word of the sentence that contains the character the most number
// of times. You can assume that the sentence contains at least one word. If there is a tie, return
// the word that appears earlier in the sentence.
let vowels = "a,e,i,o,u";

function mostLetterWord(str, char) {
  let newArray = [];
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let count = countChar(words[i], char);
    newArray.push(count);
  }
  let long = wordWithMost(newArray)
   return long;
 
}

function wordWithMost(arr) {
    let number = arr[0][1]
    let longWord = arr[0][0]
    for (let i = 1; i <arr.length; i++){
        if (number < arr[i][1]) {
          longWord = arr[i][0]
          number = arr[i][1]
        }
    }

    return longWord
}

function countChar(word, char) {
  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      counter++;
    }
  }
  return [word, counter]
}

console.log(
  mostLetterWord("she received an award for excellence in science", "e")
); // 'excellence'
console.log(mostLetterWord('she received an award for excellence in science', 'a')); // 'award'
console.log(mostLetterWord('I hope sophomore year comes soon', 'o')); // 'sophomore'
console.log(mostLetterWord('I hope sophomore year comes soon', 's')); // 'sophomore'
