let tUser:[string,number,boolean];
tUser = ["Yash Raj",22,true];
console.log('tUser:', tUser);
tUser.push(33);
console.log('tUser after push:', tUser);
// tUser[1] = "sunny"; // Error
let rgb: [number,number,number] = [255,123,255];
type User = [number,string];
const newUser: User = [4444,"Varun"];
newUser[1] = "Cheekua";
console.log('newUser:', newUser);