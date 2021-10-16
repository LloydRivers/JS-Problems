// Write a function `lalaLanguage` that accepts a sentence string as an argument. The function should
// return a new sentence where words longer that 3 characters are modified. Modified words should have
// each vowel followed by 'l' and the same vowel repeated again. See the examples.

function lalaLanguage(str) {
    let sentence = ''; 
    let words = str.split(' '); 
    for (let  i = 0; i < words.length; i++) {
        if (words[i].length > 3) {
            const repeat = repeated(words[i])
            sentence += repeat +" ";
        } else {
            sentence += words[i]
        }
    }
    return sentence
}

function repeated(word) {
    let empty = ' ';
    let vowels = 'a,e,i,o,u';
for (let i = 0; i < word.length; i++) {
    if(vowels.includes(word[i])) {
    empty += word[i] + "l" + word[i]
    } else {
        empty += word[i]
    }
}
return empty
}


console.log(lalaLanguage('this is pretty strange')); // 'thilis is preletty stralangele'
console.log(lalaLanguage('can you speak our language')); // 'can you spelealak our lalangulualagele'
