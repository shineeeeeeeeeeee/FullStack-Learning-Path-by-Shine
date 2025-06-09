// functions : reusable codes or blocks of code that performs a specific tasks in loop if required
function getName(name) {
    console.log("Hello, " + name + "!");
}
getName("shine"); // function call

function getAvg(num1, num2) {
    avg = (num1 + num2) / 2;
    console.log("Average is: " + avg);
}
getAvg(4, 4);

function getSum(a, b, c) {
    d = a + b + c;
    return d;
}

function getMul(a, b, c) {
    return a * b * c;
}

ans = getSum(1, 2, 3);
mul = getMul(1, 2, 3);
console.log(ans + " " + mul);

// function expression
const Div = function (a, b) {
    return a / b;
}
console.log(Div(1, 2));

// arrow function
const square = (a, b) => {
    return a**b;
}
console.log(square(3, 4));