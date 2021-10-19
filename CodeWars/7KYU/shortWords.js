// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    
    let words = s.split(' ');
    let first = words[0]
    for (let  i = 1; i<words.length; i++) {
        if (words[i].length < first.length) {
            first = words[i]
            
           
        }
    }
    return first.length

}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
console.log(findShort("turns out random test cases are easier than writing out basic ones"))
