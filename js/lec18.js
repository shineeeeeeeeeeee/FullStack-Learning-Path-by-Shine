// promise: object that handles async code and it's returning value
// resolve/fulfilled: executed properly: we use then later
// reject: failure occurring: we use catch later

let firstPromise = new Promise((resolve, reject) => {
    // async code
    function sayName(){
        console.log("shine");
    }
    setTimeout(sayName, 10000);
    resolve(1001);
    // reject(new Error("Internal Server Error"));
});

let secondPromise = new Promise((resolve, reject) => {
    let success = true
    if(success = true){
        resolve("Promise Fulfilled");
    }else{
        reject("Promise Rejected");
    }
});

// then and catch
secondPromise.then((message) => {
    console.log("message is:", message);
}).catch((error) => {
    console.log("Error is:", error);
});

// then and catch return
secondPromise.then((message) => {
    console.log("message is:", message);
    return "20";
}).then((message) => {
    console.log("message is:", message);
    return "30";
}).then((message) => {
    console.log("message is:", message);
});

// multiple promise
let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "First");
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Second");
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, "Third");
});

Promise.all([p1, p2, p3]).then((value) => {
    console.log(value);
}).catch((error) => {
    console.error(error);
});