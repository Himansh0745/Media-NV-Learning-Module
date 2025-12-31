// Example 1

console.log("Step 1: Goes directly to call stack and executes synchronous code immediately.");

setTimeout(() => {
    console.log("Step 4: The timer of setTimeout handle by WebAPI and callback is not executed until the call stack is empty and call back waits in callback queue.");
}, 0);

Promise.resolve().then(() => {
    console.log("Step 3: This is from Promise.then, goes to Microtask Queue and Microtask have higher priority than Task Queue.");
});
console.log("Step 2: Synchronous code execution completed, now the call stack is empty.");



// Example 2
console.log("Step 1: Script start (synchronous code)");

setTimeout(() => {
  console.log("Step 6: setTimeout callback (Task Queue)");
}, 0);

Promise.resolve().then(() => {
  console.log("Step 4: Promise.then (Microtask Queue)");
});

Promise.resolve().then(() => {
  console.log("Step 5: Another Promise.then (Microtask Queue)");
});

console.log("Step 2: Script end (synchronous code finished)");
