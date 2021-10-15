// Write a function `shortenLongWords` that accepts a sentence string as an argument. The function
// should return the same sentence where words longer than 4 characters have their vowels removed.
function shortenLongWords(str) {
  let words = str.split(" ");
  let array = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      let changeWord = replaceVowel(words[i]);
      array.push(changeWord);
    } else {
      array.push(words[i]);
    }
  }
  return array.join(' ');
}
function replaceVowel(word) {
  let sentence = "";
  let vowels = "a,e,i,o,u";
  for (let i = 0; i < word.length; i++) {
    if (!vowels.includes(word[i])) {
      sentence += word[i];
    }
  }
  return sentence;
}

console.log(shortenLongWords("they are very noble people")); // 'they are very nbl ppl'
console.log(shortenLongWords("stick with it")); // 'stck with it'
console.log(shortenLongWords("ballerina, you must have seen her")); // 'bllrna, you must have seen her'
