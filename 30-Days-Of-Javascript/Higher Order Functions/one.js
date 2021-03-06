const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// Use forEach to console.log each country in the countries array.
countries.forEach(country => {
    console.log(country)
})

// Use forEach to console.log each name in the names array.
names.forEach(name => {
    console.log(name)
})
// Use forEach to console.log each number in the numbers array.
numbers.forEach(number => {
    console.log(number)
})
// Use map to create a new array by changing each country to uppercase in the countries array.
const newArray = countries.map(country => {
    return country.toLocaleUpperCase()
})
console.log(newArray);
// Use map to create an array of countries length from countries array.

const length = countries.map(country => {
    return country.length
})
console.log(length)
// Use map to create a new array by changing each number to square in the numbers array
const square = numbers.map(number => {
    return number * number;
})
console.log(square)
// Use map to change to each name to uppercase in the names array

const upper = names.map(name => {
    return name.toUpperCase()
})
console.log(upper);
// Use map to map the products array to its corresponding prices.

const prices = products.map(product => {
    return `${product.product}: ${product.price}`
})
console.log(prices);
// Use filter to filter out countries containing land.
const land = countries.filter(country => {
    return country.includes("land")
})
console.log(land);
// Use filter to filter out countries having six character.
const six = countries.filter(country => {
    return country.length === 6
})
console.log(six);
// Use filter to filter out countries containing six letters and more in the country array.
const sixOrMore = countries.filter(country => {
    return country.length > 6;
})
console.log(sixOrMore);
// Use filter to filter out country start with 'E';
const startWithE = countries.filter(country => {
    return !country.startsWith('E')
})

console.log(startWithE);
// Use filter to filter out only prices with values.
const values = products.filter(product => {
    return product.price > 0
})
console.log(values);
// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr) {
    return arr.filter(string => {
        if (typeof string === "string") {
            return true;
        }
    })
}
console.log(getStringLists([12, 14, "Jon", false]));
// Use reduce to sum all the numbers in the numbers array.
const total = numbers.reduce((total, index) => {
    return total += index
})
console.log(total);



// Explain the difference between some and every
// every() method in JavaScript is used to checks whether all the elements of the array satisfy the given condition or not. The Array. some() method in JavaScript is used to check whether at least one of the elements of the array satisfies the given condition or not.


// Use some to check if some names' length greater than seven in names array

const some = names.some(name => {
    return name.length > 7
})
console.log(some);
// Use every to check if all the countries contain the word land

const every = countries.every(country => {
    return country.includes('land')
})
console.log(every);


// Use find to find the first country containing only six letters in the countries array

const firstSix = countries.find(country=>{
    return country.length === 6;
})
console.log(firstSix);
// Use findIndex to find the position of the first country containing only six letters in the countries array

const findIndex = countries.findIndex(country=>{
    return country.length === 6;
})
console.log(findIndex);
// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const Norway = countries.findIndex(country=>{
    return country === 'Norway'
})
console.log(Norway);
// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const Russia = countries.findIndex(country=>{
    return country === 'Russia'
})
console.log(Russia);