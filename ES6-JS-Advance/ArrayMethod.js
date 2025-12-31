// 1) map() – Transform Data
// Definition: We Creates a new array by applying a transformation function to each element (non-mutating).
// App Use Case: Convert API payload into UI-friendly format.
const usersMap = [
	{ id: 1, name: "Himanshu" },
	{ id: 2, name: "Rahul" }
];
const resultMap = usersMap.map(user => ({ ...user, name: user.name.toUpperCase() }));
console.log('\n1) map() output:');
console.log(resultMap);

// 2) filter() – Clean / Remove Data
// Definition: Returns a new array containing only elements that satisfy the predicate.
const usersFilter = [ { name: "A", active: true }, { name: "B", active: false } ];
const activeUsers = usersFilter.filter(user => user.active);
console.log('\n2) filter() output:');
console.log(activeUsers);

// 3) reduce() – Aggregate / Build Data
// Definition: Reduce an array into a single value (number, object, or array).
const cart = [ { price: 100 }, { price: 200 } ];
const total = cart.reduce((sum, item) => sum + item.price, 0);
console.log('\n3) reduce() output:');
console.log(total);

// 4) forEach() – Side Effects
// Definition: Executes side-effect function for each element; returns undefined.
const usersForEach = ["A", "B"];
console.log('\n4) forEach() output:');
usersForEach.forEach(user => console.log(`User: ${user}`));

// 5) find() – Find One Item
// Definition: Returns the first element that matches predicate.
const usersFind = [ { id: 1, name: "A" }, { id: 2, name: "B" } ];
const userFound = usersFind.find(u => u.id === 2);
console.log('\n5) find() output:');
console.log(userFound);

// 6) findIndex() – Find Position
// Definition: Returns index of first matching element or -1.
const index = usersFind.findIndex(u => u.id === 2);
console.log('\n6) findIndex() output:');
console.log(index);

// 7) some() – Any Match?
// Definition: Returns true if at least one element satisfies predicate.
const roles = ["user", "admin"];
const hasAdmin = roles.some(role => role === "admin");
console.log('\n7) some() output:');
console.log(hasAdmin);

// 8) every() – All Match?
// Definition: Returns true if all elements satisfy predicate.
const fields = ["name", "email", "password"];
const isValid = fields.every(field => field.length > 0);
console.log('\n8) every() output:');
console.log(isValid);

// 9) includes() – Check Presence
// Definition: Checks whether a primitive value exists in an array.
const techs = ["js", "react", "node"];
console.log('\n9) includes() output:');
console.log(techs.includes("react"));

// 10) sort() – Order Data (mutates original)
// Definition: Sorts elements using compare function; often clone first to avoid mutation.
const scores = [30, 10, 50];
const sorted = [...scores].sort((a, b) => a - b);
console.log('\n10) sort() output (non-mutating clone):');
console.log(sorted);

// 11) slice() – Copy Data (Immutable)
// Definition: Returns a shallow copy of a portion of an array.
const dataSlice = [1, 2, 3, 4];
console.log('\n11) slice() output:');
console.log(dataSlice.slice(1, 3));

// 12) splice() – Modify Data (Avoid when possible)
// Definition: Adds/removes elements and mutates the array.
const arrSplice = [1, 2, 3];
arrSplice.splice(1, 1);
console.log('\n12) splice() output (mutated array):');
console.log(arrSplice);

// 13) concat() – Merge Arrays
// Definition: Merges arrays into a new array (non-mutating).
const a = [1];
const b = [2];
console.log('\n13) concat() output:');
console.log(a.concat(b));

// 14) flat() – Flatten Arrays
// Definition: Flattens nested arrays up to provided depth.
const nested = [1, [2, [3]]];
console.log('\n14) flat() output:');
console.log(nested.flat(2));

// 15) flatMap() – Transform + Flatten
// Definition: Map then flatten one level (useful for tokenization and expansion).
const names = ["A B", "C D"];
console.log('\n15) flatMap() output:');
console.log(names.flatMap(n => n.split(" ")));

// 16) join() – Display Formatting
// Definition: Join array elements into a string using a separator.
const stack = ["JS", "React", "Node"];
console.log('\n16) join() output:');
console.log(stack.join(" | "));

// 17) reverse() – Reverse Order
// Definition: Reverses array order (mutates); clone to preserve original.
const arrReverse = [1, 2, 3];
console.log('\n17) reverse() output (non-mutating clone):');
console.log([...arrReverse].reverse());


