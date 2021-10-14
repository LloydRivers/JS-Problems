// Write a function `print2d` that accepts a two-dimensional array as an argument. The function
// should print all inner elements of the array.

function print2d(array) {
for (let i = 0; i < array.length; i++){
    let sub = (array[i]);
    for(let j = 0; j<sub.length; j++) {
        console.log(sub[j])
    }
}
}

let array1 = [
    ["a", "b", "c", "d"], // row
    ["e", "f"], //row 
    ["g", "h", "i"], //row 
  ];
  print2d(array1);
  // prints
  //  a
  //  b
  //  c
  //  d
  //  e
  //  f
  //  g
  //  h
  //  i
  
//   let array2 = [[9, 3, 4], [11], [42, 100]];
//   print2d(array2);
  // prints
  //  9
  //  3
  //  4
  //  11
  //  42
  //  100
  