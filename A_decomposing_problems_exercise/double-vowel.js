// Write a function `doubleVowel` that accepts a string as an argument. The function should return
// the string where every occurrence of a vowel in the original string is repeated twice consecutively.
// Vowels are the letters a, e, i, o, u.

let vowels = "a, e, i, o, u";
function doubleVowel(str) {
  let sentence = ""; // ru
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      sentence += str[i] + str[i]; // e + e
    } else {
        sentence += str[i];
    }
  }
  return sentence;
}



console.log(doubleVowel("runner")); // 'ruunneer'
console.log(doubleVowel("stoplight")); // 'stoopliight'
console.log(doubleVowel("gardener")); // 'gaardeeneer'
