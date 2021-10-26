// An array is called zero-plentiful if it contains at least one 0 and every sequence of 0s is of length at least 4. Your task is to return the number of zero sequences if the given array is zero-plentiful else 0.

// seperate an array into smaller arrays, each small array have a length of 4, when each small array have 0, count 1
// if small array don't have any 0, return 0

// for (let i = 0; i,arr.length; i++) 
// if(arr[i] === 0 + arr[i] + 1 === 0 + arr[i] +2)
// [0,0,0,0,0,0,0,0,0,0,]
  


function zeroPlentiful(arr) {
  let bigArr = []; // [[0,0,0,0,]]
  let newArray = []; // 0 0 0 0 
  let count = 0;
  let anotherArr = []


  for (let i = 0; i < arr.length; i += 4) { //
    for (let j = 0; j < 4; j++) {
      if(arr[i] === 0) {
       anotherArr.push(arr[i]);
        i++;
      } else {
        break
      }
    }
    bigArr.push(newArray);
  }
  for (let i = 0; i < bigArr.length; i++) {
    if (bigArr[i].includes(0) && bigArr[i].length === 4) {
      count++;
    } else {
        count = 0
    }
  }
  return count;
}

console.log(zeroPlentiful([3]));
console.log(zeroPlentiful([0, 0, 0]));
console.log(zeroPlentiful([0, 0, 0, 0, 0, 0, 0,
  0]));

