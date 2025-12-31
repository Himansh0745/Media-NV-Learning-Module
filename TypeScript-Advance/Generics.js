function fruits10(name) {
    return name;
}
var onlyFruit = fruits10("Apple");
var onlyNum = fruits10(100);
var onlyBool = fruits10(true);
// Visible output for terminal
console.log("OUTPUT:", { onlyFruit: onlyFruit, onlyNum: onlyNum, onlyBool: onlyBool });
// --- Generics with Arrays example ---
function getFirst(items) {
    return items[0];
}
var stringArr = ["apple", "banana", "cherry"];
var numArr = [10, 20, 30];
console.log("ARRAY OUTPUT - first string:", getFirst(stringArr));
console.log("ARRAY OUTPUT - first number:", getFirst(numArr));
// Another generic helper that returns an array of the provided items
function toArray() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return items;
}
console.log("ARRAY OUTPUT - toArray:", toArray(1, 2, 3));
