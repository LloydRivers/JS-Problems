// Write a function `censorSentence(sentence, targetWords)` that accepts a sentence string and an array
// of target words as arguments. The function should return a new sentence where any target words 
// have all of their characters replaced with '*'s.

function censorSentence(sentence, targetWords) {
    let array = [];
    let words = sentence.split(' ');
    words.map(word =>{
     if(targetWords.includes(word)) {
         let stars = starring(word)
         array.push(stars)
     } else {
         array.push(word)
     }
    })
    return array
}

function starring(word) {
let empty = ''
for(let i = 0; i <word.length; i++) {
    empty += "*"
}
return empty
}

console.log(censorSentence('where the heck is my celery', ['heck', 'celery'])); 
// 'where the **** is my ******'

console.log(censorSentence('why you little sweetheart', ['sweetheart', 'salad'])); 
// 'why you little **********'