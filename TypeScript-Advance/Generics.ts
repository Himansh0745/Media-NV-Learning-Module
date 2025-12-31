function fruits10 <T>(name:T):T{
    return name
}

let onlyFruit = fruits10("Apple");
let onlyNum = fruits10(100);
let onlyBool = fruits10(true);

// Visible output for terminal
console.log("OUTPUT:", { onlyFruit, onlyNum, onlyBool });





// --- Generics with Arrays example ---
function getFirst<T>(items: T[]): T | undefined {
    return items[0];
}

const stringArr = ["apple", "banana", "cherry"];
const numArr = [10, 20, 30];

console.log("ARRAY OUTPUT - first string:", getFirst(stringArr));
console.log("ARRAY OUTPUT - first number:", getFirst(numArr));

// Another generic helper that returns an array of the provided items
function toArray<T>(...items: T[]): T[] {
    return items;
}

console.log("ARRAY OUTPUT - toArray:", toArray(1, 2, 3));