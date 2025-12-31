
console.log("START");

// 1. TIMER APIs

// setTimeout
const timeoutId = setTimeout(() => {
  console.log("setTimeout executed");
}, 1000);

// clearTimeout
clearTimeout(timeoutId);

// setInterval
let count = 0;
const intervalId = setInterval(() => {
  console.log("setInterval running:", count);
  count++;

  if (count === 3) {
    clearInterval(intervalId); // clearInterval
    console.log("setInterval cleared");
  }
}, 500);

//    2. NETWORK API (fetch)
   

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => {
    console.log("fetch title:", data.title);
  });


//    3. PROMISE (Microtask)


Promise.resolve().then(() => {
  console.log("Promise microtask executed");
});


// 4. PROCESS

console.log("Node Version:", process.version);
console.log("Platform:", process.platform);


//  5. FILE SYSTEM

const fs = require("fs");

fs.writeFile("demo.txt", "Hello from Node API", () => {
  console.log("File written using fs API");
});


//6. IMMEDIATE

setImmediate(() => {
  console.log("setImmediate executed");
});

console.log("END");
