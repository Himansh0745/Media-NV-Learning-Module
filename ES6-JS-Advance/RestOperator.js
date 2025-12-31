/*
The REST operator(...) collects multiple values into a single array or object.
It is mainly used when we don’t know how many values will come, or when we want flexible, clean, reusable logic.

Definition (in short):
The REST operator groups remaining values into a single variable, enabling flexible function arguments and clean data extraction.


Use Cases & Implementations of REST Operator
1: REST in Function Parameters (Dynamic Arguments)
*/

function sum(...numbers) {  //...numbers collects all arguments into an array called 'numbers'
    return numbers.reduce((total, num) => total + num, 0);  //reduce() adds all array values into 1 total and 0 is the initial accumulator value
}
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(10, 20, 30, 40, 50)); // Output: 150






/*
2: REST with Named Parameters (Hybrid Parameters)


REST operator separates fixed parameters from optional data, helping build scalable functions where additional information can be added without changing function structure or breaking existing code.

*/

function createUser(name, email, ...details) {
  return {
    name,
    email,
    details
  };
}

console.log(
  createUser("Himanshu", "h@mail.com", "India", "Developer", "Full Stack Engineer")
);

//code explaination 
/*
Here, 'name' and 'email' are fixed parameters, and 
Remaining arguments go into details and then return the user object and extra value collected into details.
*/



/*3: REST in Array Destructuring (Extracting Remaining Data)


REST operator in array destructuring separates important values from remaining data, making array handling cleaner, more readable, and eliminating manual slicing or index-based operations.

*/


const marks = [95, 88, 72, 60, 40];

const [topper, ...others] = marks;

console.log(topper);
console.log(others);


//code explaination 
/*
First i initialize the array of the students marks then i assign the first value to the topper then the remaining values grouped into others and then printed both.
*/





/*4: REST in Object Destructuring (Data Sanitization)

REST operator helps remove sensitive or unnecessary properties from objects, ensuring secure, immutable, and clean data handling before sending responses or updating application state.
*/


const user = {
  id: 1,
  name: "Himanshu",
  password: "secret123",
  role: "Engineer"
};

const { password, ...safeUser } = user;

console.log(safeUser);

//code explaination 
/*
Extracts the password property from the user object and groups the remaining properties into a new object called safeUser, effectively removing sensitive information.
*/





/*
5: REST for API Response Separation


REST operator cleanly separates control metadata from business data in API responses, simplifying UI rendering logic and improving clarity between operational status and actual application data
*/
const apiResponse = {
  status: "200 OK",
  message: "Success",
  data: {
    id: 1,
    name: "Himanshu",
    email: "h@mail.com",
    password: "secret123"
  }
};

const { data, ...response } = apiResponse;
console.log(response);
/*
Separates the data property from the apiResponse object, grouping the remaining properties (status and message) into a new object called response, which can be used for control flow while keeping business data separate.
*/



/*
6: REST in Higher-Order / Utility Functions

REST operator enables reusable utility functions by collecting variable input data, supporting functional programming patterns while keeping logic clean, readable, and adaptable across multiple application scenarios.
*/


function logger(type, ...messages) {
  console.log(`[${type}]`, messages.join(" "));
}

logger("ERROR", "Login failed", "Invalid password", "User blocked"); //multiple message dynamically

//code explaination
/*
The logger function takes a type parameter and collects all subsequent arguments into an array called messages. It then logs the type along with the joined messages, allowing for flexible logging of multiple messages under a single log type.
*/


/*
7: REST for Cleaning Form Data Before API Call

REST operator helps create clean API payloads by excluding UI-only fields, enforcing immutability, predictable data flow, and professional data handling practices in real-world applications.
*/


const formData = {
  name: "Himanshu",
  email: "h@mail.com",
  confirmPassword: "1234",
  termsAccepted: true
};

const { confirmPassword, termsAccepted, ...apiData } = formData;

console.log(apiData);

//code explaination
/*
Extracts the confirmPassword and termsAccepted properties from the formData object, grouping the remaining properties into a new object called apiData, which can be safely sent to an API without including UI-specific fields.
*/