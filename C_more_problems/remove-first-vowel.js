// Write a function `removeFirstVowel` that accepts a string as an argument. The function should return
// the string with it's first vowel removed.
function removeFirstVowel(str){
    let newStr = ''
    let vowels = 'a,e,i,o,u';
    for (let i = 0; i < str.length; i++){
        if (!vowels.includes(str[i])){
         newStr += str[i]
        }
    }
    return newStr
}

console.log(removeFirstVowel("volcano")); // 'vlcano'
console.log(removeFirstVowel("celery")); // 'clery'
console.log(removeFirstVowel("juice")); // 'jice'