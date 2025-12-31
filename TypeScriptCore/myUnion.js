"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
console.log('score:', score);
score = 44;
console.log('score:', score);
score = "44";
console.log('score:', score);
var Himanshu = { name: "sunny", id: 3344 };
console.log('Himanshu:', Himanshu);
Himanshu = { username: "sunny123", id: 3344 };
console.log('Himanshu:', Himanshu);
// function getDbId(id: number | string) {
//     // making some API calls
//     console.log(`DB id is : ${id}`);
// }
getDbId(3344);
getDbId("3345");
function getDbId(id) {
    // making some API calls
    if (typeof id === "string") {
        console.log("DB id is : ".concat(id));
        id.toLowerCase();
    }
    else {
        console.log("DB id is : ".concat(id));
    }
}
// A little discussion on Array
var data = [1, 2, 3];
console.log('data:', data);
var data2 = ["1", "2", "3"];
console.log('data2:', data2);
var data3 = ["1", "2", 3, true];
console.log('data3:', data3);
