/*
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1 resolved"), 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 2 rejected"), 1000);
  });

const promise3 = new Promise((resolve, reject)=>{
    setTimeout(() => 
        resolve("Result from Promise 3"), 1500);
    });


// Handling the promises

promise1
    .then(result => console.log(result))
    .catch(error => console.log(error));

promise2
    .then(result => console.log(result))
    .catch(error => console.log(error));

promise3
    .then(result => console.log(result))
    .catch(error => console.log(error));
    */

/*
In this example promise1 resolve after 2 seconds, promise2 reject after 1 second and promise3 resolve after 1.5 seconds.

The .then() method is used to handle resolved promises, while the .catch() method is used to handle rejected promises.

*/





// Promise.All example












const fs = require('fs').promises;
const path = require('path');

// URLs and keys to store results under meaningful names
const endpoints = [
    { key: 'users', url: 'https://dummyjson.com/users' },
    { key: 'quotes', url: 'https://dummyjson.com/quotes' },
    { key: 'recipes', url: 'https://dummyjson.com/recipes' }
];

async function fetchAllAndSave() {
    try {
        // Kick off parallel fetches and validate responses
        const fetchPromises = endpoints.map(e =>
            fetch(e.url).then(res => {
                if (!res.ok) throw new Error(`${e.key} fetch failed (${res.status})`);
                return res.json();
            })
        );

        const results = await Promise.all(fetchPromises);

        // Combine results into an object with meaningful keys
        const combined = {};
        endpoints.forEach((e, i) => (combined[e.key] = results[i]));

        // Write to api_data.json in the same folder as this script
        const outPath = path.resolve(__dirname, 'api_data.json');
        await fs.writeFile(outPath, JSON.stringify(combined, null, 2), 'utf8');
        console.log('Saved API data to', outPath);
    } catch (err) {
        console.error('Error fetching or saving data:', err);
    }
}

// Run the fetch-and-save routine
fetchAllAndSave();


// Implement a custom Promise.all (polyfill-style) named `myPromiseAll`
// Resolves with array of values in-order or rejects at first error.

function myPromiseAll(iterable) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(iterable)) return reject(new TypeError('myPromiseAll accepts an array'));

        const len = iterable.length;
        const results = new Array(len);
        let remaining = len;

        if (len === 0) return resolve([]);

        iterable.forEach((item, index) => {
            Promise.resolve(item)
                .then(value => {
                    results[index] = value;
                    remaining -= 1;
                    if (remaining === 0) resolve(results);
                })
                .catch(reject);
        });
    });
}

// ------------------ Tests / Demos for myPromiseAll ------------------
const pA = Promise.resolve('A');
const pB = new Promise(res => setTimeout(() => res('B'), 50));
const rawC = 'C';

myPromiseAll([pA, pB, rawC])
    .then(vals => console.log('myPromiseAll success:', vals))
    .catch(err => console.error('myPromiseAll error:', err));

const pFail = new Promise((_, rej) => setTimeout(() => rej(new Error('failure')), 30));
myPromiseAll([pA, pFail, rawC])
    .then(vals => console.log('myPromiseAll (unexpected) success:', vals))
    .catch(err => console.log('myPromiseAll expected rejection:', err.message));

Promise.all([pA, pB, rawC])
    .then(vals => console.log('native Promise.all success:', vals))
    .catch(err => console.error('native Promise.all error:', err));
