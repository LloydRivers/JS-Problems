// Write a function removeDupes that accepts an array as an argument. The function should return a
// new array where each element only appears once.
const removeDupes = arr => {
    let newArr = [];
    let length = arr.length;
    for (let i = 1; i < length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i])
        }
    }
    return newArr;
  }


  console.log(removeDupes(["x", "y", "y", "x", "z"])); // ['x', 'y', 'z']
  console.log(removeDupes([false, false, true, false])); // [false, true]
  console.log(removeDupes([42, 5, 7, 42, 7, 3, 7, 7])); // [42, 5, 7, 3]

