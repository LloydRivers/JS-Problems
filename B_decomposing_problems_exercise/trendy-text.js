// Write a function `trendyText` that accepts a sentence string as an argument. The function should
// return the sentence where the last vowel of every word is removed.
let vowels = "a,e,i,o,u";
function trendyText(str) {
  let arr = [];
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let remove = removeVowel(words[i]);
    arr.push(remove);
    {
    }
  }
  return arr.join(' ');
}

function removeVowel(words) {
  for (let i = words.length - 1; i >= 0; i--) {
    if (vowels.indexOf(words[i]) > -1) {
      let newString = words.slice(0, i) + words.slice(i + 1);
      return newString;
    }
  }
  return words;
}



console.log(trendyText("the concert will be epic")); // 'th concrt wll be epc'
// console.log(trendyText("breakfast food is wonderful")); // 'breakfst fod s wonderfl'
// console.log(trendyText("the weather will improve hopefully")); // 'th weathr wll improv hopeflly'
