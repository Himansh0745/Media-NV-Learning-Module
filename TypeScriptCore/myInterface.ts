interface User {
    readonly dbID: number,
    email: string,
    userId: number,
    googleId?: string, // optional property
    startTrial(): string,
    getCoupon(couponname: string, value: number): number
}


interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const yash: Admin = {
    dbID: 22,
    role: "admin",
    email: "yash@gmail.com",
    userId: 12345,
    githubToken: "github_token",
    startTrial() {
        return "trial started";
    },
    getCoupon(couponname: string, value: number): number {
        return value;
    }
}

console.log(yash.startTrial());
console.log('coupon:', yash.getCoupon("sunny", 50));
console.log('yash:', yash);

export {}