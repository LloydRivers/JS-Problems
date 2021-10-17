// Write a function `mostCommonLetter` that accepts a string as an argument. The function should return
// the character that appears most frequently in the string. You can assume that there are no ties.
function mostCommonLetter(str) {
    let obj = {};
    let array = [];
    for (let i = 0; i <str.length; i++) {
        if(obj.hasOwnProperty(str[i])) {
            obj[str[i]] +=1
        } else {
            obj[str[i]] = 1
        }
    }
    for (let i in obj) {
     array.push([i, obj[i]])
    }
    let result = array.sort((a,b) =>{
        return a[1] - b[1]
    })
    return result[result.length -1][0]
}

console.log(mostCommonLetter("building")); // 'i'
// console.log(mostCommonLetter("shoestring")); // 's'
// console.log(mostCommonLetter("preparedness")); // 'e'