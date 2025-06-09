// event loop
// sync code: executing at same time
// async code: code not being executed at same time

function sayName() {
    console.log("what's up!");
}
console.log("start");
setTimeout(sayName, 5000); // call stack -> browser -> call task (only returns if call stack is empty)
console.log("end");
// checkout simulation in loupe