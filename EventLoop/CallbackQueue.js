
console.log("1. Program Start");

// Callback Queue (Timers Phase)


// setTimeout executes once in Timers phase
setTimeout(() => {
  console.log("setTimeout executed");
}, 0);

// setInterval executes repeatedly until cleared
let count = 0;
const intervalId = setInterval(() => {
  console.log("setInterval executed", count);
  count++;

  if (count === 2) {
    clearInterval(intervalId);
    console.log("setInterval cleared");
  }
}, 0);


// Poll Phase (I/O callbacks)

const fs = require("fs");

fs.readFile(__filename, () => {
  console.log("fs.readFile callback executed");
});

// Check Phase

setImmediate(() => {
  console.log("setImmediate executed");
});


/*
    In this code, we demonstrate various Web APIs that interact with the Callback Queue in Event Loop.
    1. setTimeout: A timer is set to execute a callback after 0 milliseconds. This callback is placed in the Callback Queue during the Timers phase.
    2. setInterval: A repeating timer is set to execute a callback every 0 milliseconds. The interval is cleared after it has executed twice.
    3. fs.readFile: An I/O operation is performed to read the current file. The callback for this operation is placed in the Callback Queue during the Poll phase.
    4. setImmediate: A callback is scheduled to execute immediately after the I/O events in the Check phase.
    The console logs help illustrate the order of execution and how these Web APIs interact with the Event Loop and Callback Queue.
*/