"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    var result = num + 2;
    console.log("addTwo output:", result);
    return result;
}
function getUpper(val) {
    var result = val.toUpperCase();
    console.log("getUpper output:", result);
    return result;
}
function signUpUser(name, email, isPaid) {
    console.log("signUpUser called with:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Is Paid:", isPaid);
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log("loginUser called with:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Is Paid:", isPaid);
};
function getValue(myVal) {
    var result = myVal > 5;
    console.log("getValue output:", result);
    return result;
}
var getHello = function (s) {
    var result = "Hello ".concat(s);
    console.log("getHello output:", result);
    return result;
};
var heros = ["Thor", "Ironman", "Spiderman"];
heros.map(function (hero) {
    var result = "Hero is ".concat(hero);
    console.log("map output:", result);
    return result;
});
// Function Calls
addTwo(5);
getUpper("Himanshu");
signUpUser("Himanshu", "himanshu@example.com", false);
loginUser("Sunny", "sunny@example.com", false);
getValue(10);
getHello("Himanshu");
