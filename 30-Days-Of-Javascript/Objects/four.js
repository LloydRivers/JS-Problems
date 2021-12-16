// count users having greater than or equal to 50 points from the following object.
const array = Object.entries(users);

let loggedIn = array.filter(user => user[1].points >= 50).length;
console.log(loggedIn);