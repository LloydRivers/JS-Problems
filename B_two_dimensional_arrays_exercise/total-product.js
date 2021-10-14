// Write a function `totalProduct(array)` that accepts a 2D array of numbers. The function should return
// the total product of all numbers in the array.


let array1 = [
    [3, 5, 2],
    [6, 2],
  ];
  console.log(totalProduct(array1)); // 360
  
  let array2 = [
    [4, 6],
    [2, 3],
    [1, 2],
  ];
  console.log(totalProduct(array2)); // 288

  function totalProduct(arr) {
    let total = 1;
    for(let i = 0; i<arr.length; i++) {
        let sub = arr[i]
        for(let j = 0; j<sub.length; j++) {
           total *= sub[j]
        }
    }


    return total
}