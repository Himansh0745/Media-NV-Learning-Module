function addTwo(num: number) {
    return num + 2;    
}

function getUpper(val: string) {
    return val.toUpperCase();
}   

function signUpUser(name: string, email: string, isPaid: boolean) {
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
}

function getValue(myVal: number): boolean {
    if(myVal > 5) {
        return true;
    }
    return false;
}

const getHello = (s: string): string => {
    return "";
}

const heros = ["Thor", "Ironman", "Spiderman"];
heros.map((hero): string => {
    return `Hero is ${hero}`;
});

function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

addTwo(5);
getUpper("Himanshu");
signUpUser("Himanshu", "himanshu@example.com", false);
loginUser("Sunny", "sunny@example.com", false);

addTwo(5);
getUpper("Himanshu");
signUpUser("Himanshu", "himanshu@example.com", false);
loginUser("Sunny", "sunny@example.com", false);



export{};