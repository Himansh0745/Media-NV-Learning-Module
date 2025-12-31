// const User = {
//     name: "Himanshu",
//     age: 23,
//     email: "Himanshu@gmail.com",
//     isActive: true
// }

// function createUser({ name, isPaid }: { name?: string; isPaid?: boolean } = {}) {
//     console.log("User created with name:", name);
//     console.log("Is Paid:", isPaid);
// }
// createUser({name: "Himanshu", isPaid: false});


// function createCourse(): { name: string; price: number } {
//     return { name: "ReactJS", price: 399 };
// }   




// type Users = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }



// function createUsers(users: Users): Users {
//     // return { name: "", email: "", isActive: false };
//     return users;
// }
// console.log(createUsers({ name: "Rahul", email: "Rahul@gmail.com", isActive: false }));





type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number; // optional property
}

let myUser: User = {
    _id: "12345",
    name: "Sunny",
    email: "Sunny@gmail.com",
    isActive: false
}

type cardNumber = {
    cardNumber: string;
}
type cardDate = {
    cardDate: string;
}
type cardDetails = cardNumber & cardDate & {
    cvv: number;
}

myUser.email = "s@gmail.com";
//myUser._id = "56789"; // Error: Cannot assign to '_id' because it is a read-only property.

















export{}