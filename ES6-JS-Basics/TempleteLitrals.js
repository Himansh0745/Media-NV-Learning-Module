const user = "Himanshu";
const role = "Associate Full Stack Engineer";
const experience = 0;

// The Old Way (Messy)
const oldMsg = "Hello " + user + ", welcome back.\n" + "Role: " + role;

// The Modern Way (Template Literals)
const message = `Hello ${user}, welcome to Media NV.
Your role is: ${role}.
Next year, you will have ${experience + 1} years of experience
and after that you became a Full Stack Engineer`;

console.log(message);