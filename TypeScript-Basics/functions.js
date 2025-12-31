"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return false;
}
var getHello = function (s) {
    return "";
};
var heros = ["Thor", "Ironman", "Spiderman"];
heros.map(function (hero) {
    return "Hero is ".concat(hero);
});
addTwo(5);
getUpper("Himanshu");
signUpUser("Himanshu", "himanshu@example.com", false);
loginUser("Sunny", "sunny@example.com", false);
addTwo(5);
getUpper("Himanshu");
signUpUser("Himanshu", "himanshu@example.com", false);
loginUser("Sunny", "sunny@example.com", false);
