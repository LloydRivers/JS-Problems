const array1 = [1, 2, 3, 4, 100, 200];

const value = array1.reduce((total, index)=>{
    return total += index
})

console.log(value)