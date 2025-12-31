/*

console.log(a); // Undefined (Hoisted)
var a = 5;
console.log(a); // 5



//let
// ReferenceError: Cannot access 'b' before initialization

console.log(b);
let b = 10;
console.log(b); // 10


// const
// ReferenceError: Cannot access 'c' before initialization


console.log(c); 
const c = 15;
console.log(c); // 15


*/

// 'const' is used for values that must remain constant references
const TAX_RATE = 0.18; 

// 'let' is used for values that will change over time
let cartTotal = 100;

if (cartTotal > 0) {
    // This 'discount' variable only exists inside this 'if' block
    let discount = 10; 
    cartTotal = cartTotal - discount + (cartTotal * TAX_RATE);
    console.log("Total inside block:", cartTotal);
}

// console.log(discount); // This would throw an Error! 'discount' is not defined here.
