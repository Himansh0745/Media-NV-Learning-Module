/*
The spread operator is used to expand elements of an iterable (like an array, string, or object) into individual elements. It allows copying, merging, and passing elements to functions in a more flexible way.
*/



/*
Use Cases & Implementations of Spread Operator
 Example 1. Copying an Array (Shallow Copy)

Instead of modifying the original array, the spread operator helps create a new copy.
*/
const arr1 = [1, 2, 3];
const arr2 = [...arr1];  // Copying arr1 into arr2
console.log(arr2);  


/*
 2. Merging Arrays

You can easily merge multiple arrays into one.
*/

const fruits = ['apple', 'banana'];
const vegetables = ['carrot', 'lettuce'];
const food = [...fruits, ...vegetables];
console.log(food);

/*
3. Spreading Elements in Function Arguments

It allows passing elements from an array as individual function arguments.
*/

function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));


/*
4. Spreading Strings into Arrays
You can spread a string into an array of its characters.
*/
const str = "Hello";
const chars = [...str];
console.log(chars);  // Output: ['H', 'e', 'l', 'l', 'o']

/*
5. 4. Copying and Merging Objects

The spread operator works with objects too, allowing shallow copies and merging.
*/

const obj1 = { name: "Himanshu Pradhan", age: 23 };
const obj2 = { country: "India" };

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);  