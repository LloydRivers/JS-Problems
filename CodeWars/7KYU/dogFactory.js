// Write a function, dogFactory(). It should: have 3 parameters: name, breed, and weight (in that order)
// expect name and breed to be strings
// expect weight to be a number
// return an object
// have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in

const dogFactory = (name, breed, weight) => {
return {name, breed, weight}
}

console.log(dogFactory('Joe', 'Pug', 27))
// Should return { name: 'Joe', breed: 'Pug', weight: 27 }