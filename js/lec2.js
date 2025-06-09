// variables and datatypes

// variables is named memory locations
// var, let, const

// dynamically typed variable: value, int to string value change
// block scoped, can reassign but not re-declare
let age = 25;
let name = "shine";

// not used, as its functions and global scope but not block scope.
// can reassign
var a = 50

if(true){
    console.log(a);
    // global scope
}

function solve(){
    var c = 25
    console.log(c)
}

solve();
// console.log(c), throws error

// reassignment not possible
const b = 70

// datatypes are primitive and non primitive
// primitives are number, string, boolean, undefined, null, bigint (2^53 - 1), symbol : immutable
let sym = Symbol('hi')

let num = 5.34;
let str = "shine";
let bool = true;
let undefined;
let n = null
let bigint = 257489290179483;
console.log(num + " " + str + " " + bool + " " + undefined + " " + n + " " + bigint);

console.log(typeof(num))