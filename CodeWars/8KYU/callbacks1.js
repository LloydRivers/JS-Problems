// write a call back function that filters the array leaving only even numbers

let array = [1,2,3,4,5,6, 8, 22, 44, true, "Lloyd"];


let filter = array.filter(Number.isInteger).filter(mod)

function mod(num){
  if(num % 2 === 0) {
      return true
  }
}

console.log(filter)