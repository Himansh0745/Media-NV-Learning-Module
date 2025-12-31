"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yash = {
    dbID: 22,
    role: "admin",
    email: "yash@gmail.com",
    userId: 12345,
    githubToken: "github_token",
    startTrial: function () {
        return "trial started";
    },
    getCoupon: function (couponname, value) {
        return value;
    }
};
console.log(yash.startTrial());
console.log('coupon:', yash.getCoupon("sunny", 50));
console.log('yash:', yash);
