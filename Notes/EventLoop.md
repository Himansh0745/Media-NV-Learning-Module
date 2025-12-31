Topic : JavaScript Event Loop

##Purpose: 
To understand how JavaScript handles asynchronous operations despite being single-threaded.


1. What is JavaScript Event Loop?

-> The Event Loop is a mechanism that continuously checks whether the Call Stack is empty, and if it is, pushes pending tasks from the Callback  Queue or Microtask Queue into the Call Stack for execution.

##Key Idea
-> JavaScript executes code one line at a time
-> Async tasks don’t block execution
-> Event Loop coordinates when async callbacks run


2.  Why Event Loop Exists?

-> JavaScript is single-threaded, means Only one Call Stack Cannot execute multiple tasks at the same time But modern apps need 'API calls',       'Timers' and User interactions

 -> Event Loop enables non-blocking async behavior


 3. Call Stack

-> The Call Stack is a data structure that keeps track of function calls currently being executed.

Rules: 
Follows LIFO (Last In, First Out)
Synchronous code goes here



3.1  Why Do We Use the Call Stack in JavaScript?

-> We use the Call Stack to keep track of function execution order — which function is currently running and which function should run next.

Because JavaScript:
Is single-threaded
Executes one function at a time

The Call Stack helps JavaScript manage execution flow correctly.


4. Web APIs

 -> Web APIs are browser-provided features that handle async tasks outside the Call Stack.

  Examples:
  setTimeout
  fetch
  DOM events
  setInterval

⚠️ Web APIs are NOT part of JavaScript engine

5. Callback Queue (Task Queue)

 -> Stores callbacks from Web APIs once async tasks are complete.

Examples:
setTimeout
DOM events

6. Microtask Queue

-> A higher-priority queue that stores microtasks, executed before callback queue.

Examples:
Promise.then
queueMicrotask
MutationObserver