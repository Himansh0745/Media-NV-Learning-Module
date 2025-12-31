// 1. Callback Implementation

/*
const { resolve } = require("path");

function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 1000);
}

function processData() {
    console.log("Data processed...");
}
fetchData(processData);

*/

/*
// 2. callback Hell example and its Implementation

function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 completed");
        callback();
    }, 1000);
}
function step2(callback) {
    setTimeout(()=>{
        console.log("step 2 completed");
        callback();
    }, 2000);
}

function step3(callback) {
    setTimeout(()=>{
        console.log("step 3 completed");
        callback();
    }, 3000);       
}

// Callback Hell
step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps completed (Callback Hell)");
        });
    });
});
*/


/*
// 3. Callback Problems with help of promises

function fetchData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data fetched");
            resolve();
        }, 3000);
    });
}

fetchData().then(() => {
    console.log("Data processed...");
});
*/


/*
// 4. solving Callback Hell using Promises

function step1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1 completed");
            resolve();
        }, 1000);   
    });
}

function step2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 2 completed");
            resolve();
        }, 2000);   
    });
}

function step3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 3 completed");
            resolve();
        }, 3000);   
    }); 
}

// using promise to avoid callback hell
step1()
     .then(() => step2())
     .then(() => step3())
     .then(() => {
        console.log("All steps completed (Using Promises)");
     });

*/

// 5. Callback problem without setTimeout

function fetchData(callback) {
    console.log("Data fetched");
    callback();
}

function processData() {
    console.log("Data processed...");
}

fetchData(processData);


//6. solving callback hell without SetTimeout

function step1(callback) {
    console.log("Step 1 completed");
    callback();
}
function step2(callback) {
    console.log("Step 2 completed");
    callback();
}       
function step3(callback) {
    console.log("Step 3 completed");
    callback();
}
// Callback Hell
step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps completed (Callback Hell)");
        });
    });
});