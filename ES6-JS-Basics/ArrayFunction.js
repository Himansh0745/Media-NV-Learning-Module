/*Arrow Functions
Arrow functions provide a concise syntax for writing functions. They have lexical this binding, making them useful in callback functions.


const totalPrice = (price, quantity) => price * quantity;
console.log(totalPrice(50, 3)); // Output: 150

*/



const prices = [10, 20, 30, 40];

// Old Way (Verbose)
const oldWay = prices.filter(function(price) {
    return price > 20;
});

// Modern Way (Arrow Function)
// Notice no 'function' keyword, no parentheses for single arg, and implicit return
const highPrices = prices.filter(price => price > 20);

// Mapping with arrow function
const doubledPrices = highPrices.map(price => price * 2);

console.log(doubledPrices); // Output: [60, 80]

/*
price => price > 20 is a function that takes price, checks if it is greater than 20, and returns the result immediately.
It makes operations like .map, .filter, and .reduce incredibly readable.
*/