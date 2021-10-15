// Write a function `pickPrefix(strings, prefix)` that accepts an array of strings and a prefix string 
// as an argument. The function should return the an array of words that begin with the prefix.
function pickPrefix(strings, prefix) {
    let array = []; 
    for (let i = 0; i <strings.length; i++) {
        if(strings[i].startsWith(prefix)) {
            array.push(strings[i])
        }
    }
    return array
}


console.log(pickPrefix(['connect', 'company', "Comic-con", 'concert', 'cram'], 'con'));
// ['connect', 'concert']

console.log(pickPrefix(['miner', 'mistake', 'misspeak', 'moose', 'mission'], 'mis'));
// // [''mistake', 'misspeak', 'mission']
