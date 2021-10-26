// You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

// Finally, return the padded string.


function padIt(str,n){
   let newArr = [str]
   let x = 1
   while(x != (n +1)) {
        if(x % 2 !== 0) {
            newArr.unshift('\*')
        } else {
            newArr.push("\*")
        }
        x++
    }
    return newArr.join("")
}

  console.log(padIt("a",1))
  console.log(padIt("a",2))
  console.log(padIt("a",3))
  console.log(padIt("a",4))
  console.log(padIt("a",5))

//   let newArr = [str];
//   for(let i = 1; i <= n; i++){
//      if(i % 2 !== 0) {
//          newArr.unshift('\*')
//      } else {
//          newArr.push("\*")
//      }
//   }
//   return newArr.join('')