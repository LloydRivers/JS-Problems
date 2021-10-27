// Remove tuesday from the person object

const person = {
    firstName:"John",
    lastName:"Doe",
    daysOff: {Monday: "no work", Tuesday:"Working til 10am"},
    hobbies: [{name:'bmw', model:['z3', 'X5', 'V8']}, {name:'ford', model:['focus', 'fiesta', 'transit']}]
}
delete person.daysOff.Tuesday
console.log(person)