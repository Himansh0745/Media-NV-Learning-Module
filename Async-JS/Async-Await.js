//Example 1:
// Basic Implementation of Async-Await
//Fetching data simulation

const { get } = require("http");

/*
function fetchUser(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User data Loaded successfully");
        }, 2000);
});
}

async function getUserData() {
    console.log("Fetching user data...");
    
    const data = await fetchUser();
    console.log(data);
    console.log("User data processing completed.");
}

getUserData();
*/

/*
// Example 2: Async-Await with object data fetching simulation
function fetchUser(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({name: "Himanshu", age: 20});
        }, 2000);
});
}   

// Async function to get user data
async function getUserData(){
    console.log("Fetching user data...");
    const user = await fetchUser();
    console.log("User Data:", user);
}
getUserData();
*/


/*
// Async/Await with error handling(try-catch)

// Example 3(API Failure Simulation)

function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Network error");
        }, 2000);
});
}   

async function getData(){
    try{
        const result = await fetchData();
        console.log("Data fetched:", result);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}
getData();

*/



// Example 4: Real-world Example(user login flow){
function authenticateUser(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User authenticated");
        }, 2000);   
    });
}

function fetchUserProfile(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({name: "Himanshu", role: "Associate Full Stack Engineer"});
        }, 2000);   
    });
}

async function userLoginFlow(){
    try{
        const auth = await authenticateUser();
        console.log(auth);

        const profile = await fetchUserProfile();
        console.log("User Profile:", profile);  

        console.log("Login completed.");
    } catch (error) {
        console.log("Error during login:", error);
    }
}
userLoginFlow();