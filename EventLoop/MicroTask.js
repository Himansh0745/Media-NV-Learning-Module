console.log("1. Program Start");

setTimeout(() => {
  console.log("8. setTimeout executed");
}, 0);

setImmediate(() => {
  console.log("9. setImmediate executed");
});

Promise.resolve().then(() => {
  console.log("4. Promise 1 executed");

  // Nested microtask (added at END of microtask queue)
  Promise.resolve().then(() => {
    console.log("7. Nested Promise executed");
  });
});

Promise.resolve().then(() => {
  console.log("5. Promise 2 executed");
});

queueMicrotask(() => {
  console.log("6. queueMicrotask executed");
});

process.nextTick(() => {
  console.log("3. process.nextTick executed");
});

const fs = require("fs");

fs.readFile(__filename, () => {
  console.log("10. fs.readFile callback executed");
});

console.log("2. Program End");


/*
 In 1st and 2nd steps FirstJavaScript starts executing synchronous Code and runs line by line in the Call Stack and Once all sync code finishes, Call Stack becomes empty. 
 
 In 3rd step we know that process.nextTick has a Highest Priority in Microtask so, it runs first among all Microtasks. It Runs immediately after Call Stack is empty and Executes before Promise and queueMicrotask

In 4th and 5th steps Both Promises are in Microtask Queue and Promises have same priority so they execute in the order they were created. So, Promise 1 runs first followed by Promise 2. 

In 6th step queueMicrotask is also in Microtask Queue but it was created after all Promises so it runs after all Promises are executed.

In 7th step Nested Promise inside the first Promise is created after the first Promise is resolved, so it goes to the end of the Microtask Queue and runs after both Promises are executed.

In 8th step After all Microtasks are executed, Event Loop checks the Task Queue. setTimeout callback is in the Task Queue and it has been waiting for 0ms, so it runs next.

In 9th step setImmediate callback is also in the Task Queue. Although both setTimeout and setImmediate are in the Task Queue, setTimeout was created first, so it runs before setImmediate. Finally, In 10th step fs.readFile callback is executed after all previous tasks are completed.
*/