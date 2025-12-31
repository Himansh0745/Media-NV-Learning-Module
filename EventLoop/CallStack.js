// STEP 0: Global Execution Context is created and JavaScript starts executing from top to bottom

function first() {
  // STEP 4: first() is pushed into Call Stack
  console.log("Inside first()");
  // STEP 4 ends → first() is popped from Call Stack
}

function second() {
  // STEP 2: second() is pushed into Call Stack
  first(); // STEP 3: first() is pushed on top of second()
  
  // STEP 5: after first() finishes, second() continues
  console.log("Inside second()");
  // STEP 5 ends → second() is popped from Call Stack
}

function third() {
  // STEP 1: third() is pushed into Call Stack
  second(); // STEP 2: second() is pushed on top of third()
  
  // STEP 6: after second() finishes, third() continues
  console.log("Inside third()");
  // STEP 6 ends → third() is popped from Call Stack
}

// STEP 1: function call starts here
third();
// Call Stack is now empty
