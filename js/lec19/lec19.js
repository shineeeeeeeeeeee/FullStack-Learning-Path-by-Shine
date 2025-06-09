// Async-await and fetch API example

// Example 1: async-await with setTimeout (but NOT ideal)
async function getData() {
    // setTimeout is not promise-based, so await doesn't work here
    setTimeout(function() {
        console.log("I am in a timeout block");
    }, 3000);

    // This line will throw error because resolve is not defined
    // resolve(1); // ❌ Remove or replace

    // To simulate a delay properly, use a Promise
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("Waited 3 seconds using Promise");
}
// getData(); // Uncomment to test

// Example 2: Using fetch API (GET request)
async function getData2() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await response.json();
    console.log(data);
}
// getData2(); // Uncomment to test

// Example 3: Using fetch API (POST request)
const myHead = new Headers();
myHead.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";
const options = {
    method: "POST",
    body: JSON.stringify({ username: "shine" }),
    headers: myHead,
};


async function getData3() {
    const response = await fetch('https://dummyjson.com/posts');
    let data = await response.json();
    console.log("Get data response:", data);
}
async function postData3() {
    const response = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: 'SHINE MEOW',
            userId: 5,
          /* other user data */
        })
    });
    let data = await response.json();
    console.log("Post data response:",data);
}
async function process() {
    postData3(); // Uncomment to test
    getData3();
}
process();

// https://dummyjson.com/docs