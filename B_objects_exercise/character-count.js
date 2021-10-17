// Write a function `characterCount` that accepts a string as an argument. The function should return
// an object containing the count of characters in the string.

function characterCount(str) {
  let obj = {};
  
  for (let i = 0; i < str.length; i++) {
    if (obj.hasOwnProperty(str[i])) {
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  return obj;
}

console.log(characterCount("evening")); // { e: 2, v: 1, n: 2, i: 1 , g: 1 }
console.log(characterCount("mississippi")); // { m: 1, i: 4, s: 4, p: 2 }
console.log(characterCount("chili")); // { c: 1, h: 1, i: 2, l: 1 }

// if (value > 0){ obj = m}
