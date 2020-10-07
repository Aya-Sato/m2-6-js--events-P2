// We often deal with "arrays of objects";
// below is an example of an array of objects, where each object represents a person:

const people = [
  { name: { first: "Alyssa", middle: "P.", last: "Hacker" }, age: 26 },
  { name: { first: "Ben", last: "Bitdiddle" }, age: 34 },
  { name: { first: "Eva", middle: "Lu", last: "Ator" }, age: 40 },
  { name: { first: "Lem", middle: "E.", last: "Tweakit" }, age: 45 },
  { name: { first: "Louis", last: "Reasoner" }, age: 21 },
  { name: { first: "Shahan", middle: "Haig", last: "Krakirian" }, age: 21 },
];

//-------------------------------------------------

// Exercise 3
// ------------
// 1. Write a function that, when passed an array of *people* (person objects) as
// an argument and returns an array of their full names (each full name is a string).

function fullName(peopleArr) {
  let resultArr = [];
  for (let i = 0; i < peopleArr.length; i++) {
    let newArr = Object.values(peopleArr[i]).filter(element => {return typeof element === 'object'});
    let obj = newArr[0];
    let toString;
    if (obj.hasOwnProperty('middle') === true) {
      toString = obj['first'] + " " + obj['middle'] + " " + obj['last'];
    }
    else {
      toString = obj['first'] + " " + obj['last'];
    }
    let arrayedName = toString.split(',');
    resultArr.push(arrayedName[0]); 
  }
  return resultArr;
};


//Diana's better answer:
// function fullName(people){
//   return people.map(person=> {
//     const {first, middle, last} = person && person.name || {};
//     const fullName = [first, middle, last].filter(name => typeof name === 'string');
//     return fullName.join(' ');
//   })
// }

// 2. Do a console.log to verify your function.
console.log(fullName(people));
// 3. Run the test to validate: yarn test exercise-3

module.exports = { fullName, people };
