const Ironman: string[] = [];
// const heroPower: number[] = [];
const heroPower: Array<number> = [];

type User = {
    name: string;
    isActive: boolean;
}
const allUsers: User[] = [];

const MLModels: number[][] = [
    [255, 255, 255],
    [140, 200, 100],
    [10, 20, 30]
];




Ironman.push("Tony Stark");
heroPower.push(100);
allUsers.push({ name: "Thor", isActive: true });
MLModels.push([20, 30, 40]);

console.log(Ironman);
console.log(heroPower);
console.log(allUsers);
console.log(MLModels);

export{}
