// Write a function `getInitials` that accepts an array of students as an argument. The function should
// return an array containing the initials of each student.
// Your function must utilize the native Array#map method.

const getInitials = (arr) => {
  return arr.map((name) => {
    return name.first[0].toUpperCase() + name.last[0].toUpperCase();
  });
};

let students1 = [
  { first: "ada", last: "yonath", subject: "chemistry" },
  { first: "nelly", last: "sachs", subject: "literature" },
  { first: "rosalyn", last: "yallow", subject: "medicine" },
];
console.log(getInitials(students1)); // ['AY', 'NS', 'RY']

let students2 = [
  { first: "margaret", last: "knight" },
  { first: "ellen", last: "ochoa" },
];
console.log(getInitials(students2)); // ['MK', 'EO']
