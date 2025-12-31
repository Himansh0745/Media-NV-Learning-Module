let subs: number | string = '1M'
console.log('subs:', subs);

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';
console.log('apiRequestStatus:', apiRequestStatus);

let airlineSeat: 'aisle' | 'middle' | 'window';

airlineSeat = 'aisle';
console.log('airlineSeat:', airlineSeat);
// airlineSeat = 'crew'; // Error: Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'.

const orders = ['12', '20', '30', '42'];
console.log('orders:', orders);


//Now here we avoid the any
let currentorder: string | undefined;
for(let order of orders){
    if(order ==='20'){
        currentorder = order
        console.log('found order inside loop:', currentorder);
        break;
    }
    currentorder = "15";
}

console.log('Current Order:', currentorder);
