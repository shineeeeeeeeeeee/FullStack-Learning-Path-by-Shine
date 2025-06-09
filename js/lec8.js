// temporal dead zone
// variable scope : global: anywhere, function: inside func and block = {}

var age = 25;
// global

function func(){
    var limit = 15;
    // function variable or local variable
}

{
    let height = 150;
    // block scope
}

// TDZ : variable created by let or const cannot use hoisting, only var can
console.log(marks); // can not access marks
const marks = 100;