// Write a function `commonElements` that accepts two arrays as arguments. The function should
// return a new array containing the elements that are found in both input arrays.
// Your function must utilize the native Array#filter method.

const commonElements = (arr1, arr2) =>{
    let newArr = []
    arr1.filter(element=>{
        if(arr2.includes(element)) {
            newArr.push(element)
        }
    })
    return newArr
}
console.log(commonElements(['a', 'b', 'c'], ['c', 'a'])); // ['a', 'c']
console.log(commonElements(['cat', 'dog', 'mouse', 'fish'], ['dog', 'rat'])); // ['dog']
console.log(commonElements(['skip', 'jump'], ['swim', 'hop'])); // []