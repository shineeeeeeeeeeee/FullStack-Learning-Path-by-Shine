// call stack and hoisting
// hoisting is a process that shifts the variable and function declaration to the top of the scope

// even when called above, it's still executing as function shifted above through hoisting
// though value not shifted

name("shine");

function name(Name){
    console.log(Name);
}

// let and const doesn't work in this

// const object1 = new human();
// class human{}

// functions are called first class citizens

function greet(nam, msg){
    console.log("hello, "+ msg);
}
greet(name("shine"), "shine");



function solve(number){
    return function(numbers){
        return numbers*number
    }
}
let ans = solve(5);
console.log(ans(10));


// array of functions
const arr = [
    function (a,b){
        return a + b;
    },
    function (a,b){
        return a - b;
    },
    function (a,b){
        return a * b;
    }
]
let first = arr[0];
let sum = first(5, 10);
console.log(sum);