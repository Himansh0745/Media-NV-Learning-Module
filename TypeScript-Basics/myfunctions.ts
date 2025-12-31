function addTwo(num: number) {
    const result = num + 2;
    console.log("addTwo output:", result);
    return result;
}

function getUpper(val: string) {
    const result = val.toUpperCase();
    console.log("getUpper output:", result);
    return result;
}   

function signUpUser(name: string, email: string, isPaid: boolean) {
    console.log("signUpUser called with:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Is Paid:", isPaid);
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
    console.log("loginUser called with:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Is Paid:", isPaid);
}

function getValue(myVal: number): boolean {
    const result = myVal > 5;
    console.log("getValue output:", result);
    return result;
}

const getHello = (s: string): string => {
    const result = `Hello ${s}`;
    console.log("getHello output:", result);
    return result;
}

const heros = ["Thor", "Ironman", "Spiderman"];
heros.map((hero): string => {
    const result = `Hero is ${hero}`;
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

export {};
