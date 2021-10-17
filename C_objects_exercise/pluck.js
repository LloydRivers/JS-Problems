// Write a function `pluck` that accepts an object and an array of strings as an argument. The function
// should return a new object containing the keys of the original object that are found in the array.
function pluck(obj, arr) {
    let newObj = {};
    for (let key in obj) {
        if(arr.includes(key)) {
            newObj[key] = obj[key]
        }
    }
return newObj

}

console.log(pluck({name: 'Fido', color: 'Brown', breed: 'German Shepherd'}, ['name', 'breed']));
// { name: 'Fido', breed: 'German Shepherd' }

console.log(pluck({ make: 'Tesla', mpg: 93 , model: 'Model X', color: 'white'  }, ['make', 'model']));
// {  make: 'Tesla', model: 'Model X' }