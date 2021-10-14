// Write a function `removeVowels` that accepts a string as an argument. The function should return
// a version of the string where all vowels are removed.

function removeVowels(str) {
    let newStr = ''
    let vowels = 'a,e,i,o,u';
    for (let i = 0; i < str.length; i++){
        console.log(str[i])
        if (!vowels.includes(str[i])){
         newStr += str[i]
        }
    }
    return newStr
}




console.log(removeVowels("jello")); // jll
console.log(removeVowels("sensitivity")); // snstvty
console.log(removeVowels("cellar door")); // cllr dr