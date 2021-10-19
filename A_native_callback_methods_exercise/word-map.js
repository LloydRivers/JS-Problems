// Write a function `wordMap` that accepts a sentence string and an object as arguments. The function
// should return a new sentence where words that exist as keys in the object are replaced with their
// corresponding values.
// Your function must utilize the native Array#map method.

const wordMap = (str, obj)=>{
    let words = str.split(' ');
    return words.map(word =>{
        for (let key in obj){
            let prop = obj[key]
            if(word === key) {
                word = prop
                return word
            } 
        }
        return word
    })
}

console.log(wordMap('open the pod bay doors', {pod: 'ship', open: 'close'})); 
// 'close the ship bay doors'

// console.log(wordMap('breakfast food is good', {breakfast: 'brunch', good: 'great'})); 
// // 'brunch food is great'