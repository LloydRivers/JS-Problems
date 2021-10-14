// Write a function `alternatingCaps` that accepts a sentence string as an argument. The function should
// return the sentence where words alternate between lowercase and uppercase.
function alternatingCaps(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      console.log(findIndex(words[i]))
    }
}

console.log(alternatingCaps("take them to school")); // 'take THEM to SCHOOL'
console.log(alternatingCaps("What did ThEy EAT before?")); // 'what DID they EAT before?'