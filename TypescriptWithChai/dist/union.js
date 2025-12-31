"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let subs = '1M';
console.log('subs:', subs);
let apiRequestStatus = 'pending';
console.log('apiRequestStatus:', apiRequestStatus);
let airlineSeat;
airlineSeat = 'aisle';
console.log('airlineSeat:', airlineSeat);
// airlineSeat = 'crew'; // Error: Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'.
const orders = ['12', '20', '30', '42'];
console.log('orders:', orders);
//Now here we avoid the any
let currentorder;
for (let order of orders) {
    if (order === '20') {
        currentorder = order;
        console.log('found order inside loop:', currentorder);
        break;
    }
    currentorder = "15";
}
console.log('Current Order:', currentorder);
//# sourceMappingURL=union.js.map