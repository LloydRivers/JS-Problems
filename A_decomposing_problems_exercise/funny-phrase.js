// Write a function `funnyPhrase` that accepts a sentence string as an argument. The function should
// return the sentence where every other word has its vowels repeated twice consecutively.
// Vowels are the letters a, e, i, o, u.

let vowels = "a, e, i, o, u";

function funnyPhrase(str) {
  let words = str.split(" ");
  let sentence = [];
  for (let i = 0; i < words.length; i++) {
    if (i % 2 !== 0) {
      let double = doubelVowel(words[i]);
      sentence.push(double);
    } else {
      sentence.push(words[i]);
    }
  }
  return sentence.join(" ");
}

function doubelVowel(words) {
  let sentence = "";
  for (let i = 0; i < words.length; i++) {
    if (vowels.includes(words[i])) {
      sentence += words[i] + words[i]; // e + e
    } else {
      sentence += words[i];
    }
  }
  return sentence;
}

console.log(funnyPhrase("she dreamed of being a runner")); // 'she dreeaameed of beeiing a ruunneer'
console.log(funnyPhrase("park near the stoplight")); // 'park neeaar the stoopliight'
console.log(funnyPhrase("we need many gardeners")); // 'we neeeed many gaardeeneers'
