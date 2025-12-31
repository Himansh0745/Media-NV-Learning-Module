let score: number | string = 33;
console.log('score:', score);
score = 44;
console.log('score:', score);
score = "44";
console.log('score:', score);

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let Himanshu: User | Admin = { name: "sunny", id: 3344 };
console.log('Himanshu:', Himanshu);
Himanshu = { username: "sunny123", id: 3344 };
console.log('Himanshu:', Himanshu);

// function getDbId(id: number | string) {
//     // making some API calls
//     console.log(`DB id is : ${id}`);
// }

getDbId(3344);
getDbId("3345");


function getDbId(id: number | string) {
    // making some API calls
    if (typeof id === "string") {
        console.log(`DB id is : ${id}`);
        id.toLowerCase();
    } else {
        console.log(`DB id is : ${id}`);
    }
}





// A little discussion on Array

const data: number[]  = [1, 2, 3];
console.log('data:', data);
const data2:  string[] = ["1", "2", "3"];
console.log('data2:', data2);
const data3: (string | number|boolean)[] = ["1", "2", 3, true];
console.log('data3:', data3);


export {}