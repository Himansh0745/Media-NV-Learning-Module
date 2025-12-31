// Destructuring examples (ES6)
// Run with: node Destructuring.js

// ---------- Array Destructuring ----------
const foo = ["one", "two", "three"];
const [red, yellow, green] = foo;
console.log('Array basic:');
console.log(red);    // "one"
console.log(yellow); // "two"
console.log(green);  // "three"

// Skipping values
const colors = ["red", "yellow", "green", "blue"];
const [firstColor, , thirdColor] = colors;
console.log('\nSkipping values:');
console.log(firstColor); // "red"
console.log(thirdColor); // "green"

// Swapping variables
let a = 1;
let b = 3;
[a, b] = [b, a];
console.log('\nSwapping variables:');
console.log(a); // 3
console.log(b); // 1

// Rest syntax for arrays
const numbers = [10, 20, 30, 40, 50, 60, 70];
const [n1, n2, ...rest] = numbers;
console.log('\nArray rest syntax:');
console.log(n1);    // 10
console.log(n2);    // 20
console.log(rest); // [30, 40, 50, 60, 70]

// Default values in array destructuring
const arr = [5];
const [x = 10, y = 20] = arr;
console.log('\nArray defaults:');
console.log(x); // 5 (from array)
console.log(y); // 20 (default)

// Nested array destructuring
const nestedArr = [1, [2, 3], 4];
const [one, [two, three], four] = nestedArr;
console.log('\nNested array destructuring:');
console.log(one, two, three, four); // 1 2 3 4


// ---------- Object Destructuring ----------
const user = { id: 42, isVerified: true };
const { id, isVerified } = user;
console.log('\nObject basic:');
console.log(id);         // 42
console.log(isVerified); // true

// Assigning to new variable names (aliases)
const o = { p: 42, q: true };
const { p: fooVar, q: bar } = o;
console.log('\nAliases:');
console.log(fooVar); // 42
console.log(bar);    // true

// Object rest syntax
const person = { name: "Rahul", age: 20, city: "Noida" };
const { name, ...details } = person;
console.log('\nObject rest syntax:');
console.log(name);    // "Rahul"
console.log(details); // { age: 20, city: "Noida" }
// Default values in object destructuring
const { name: personName = 'Anonymous', age: personAge, country = 'US' } = { name: 'John', age: 50 };
console.log('\nObject defaults:');
console.log(personName); // John
console.log(personAge);  // 50
console.log(country);    // US (default because property was missing)

// Nested object destructuring
const user2 = {
  name: "Jane Doe",
  fullName: { firstName: "Sunny", lastName: "Kumar" }
};
const { fullName: { firstName } } = user2;
console.log('\nNested object destructuring:');
console.log(firstName); // "Sunny"
// Destructuring in function parameters
function displayDetails({ name, age }) {
  console.log(`\n${name} is ${age} years old.`);
}
displayDetails({ name: "Himanshu", age: 23 }); // Himanshu is 23 years old.

// Notes: Destructuring does not modify the original source values
console.log('\nOriginal structures remain unchanged:');
console.log('foo:', foo);
console.log('user:', user);
