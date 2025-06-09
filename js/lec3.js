// operators and conditionals
// binary and unary
// unary is one operand : ++a

// arithmetic
let sum = 2 + 3;
let sub = 2 - 3;
let mul = 2 * 3;
let div = 2 / 3;
let mod = 2 % 3;
let pow = 2 ** 3;

console.log(sum + " " + sub + " " + mul + " " + div + " " + mod + " " + pow);
let a = 1
let b = 3
console.log(a++); // displayed 1 as inc later
console.log(++a); // a = 2 and post-inc hence 3

// assignment : let a = 5 or a = a + 10

// comparison
console.log(a==b); // same value
console.log(a===b); // same datatype
console.log(a>=b); // greater or equal
console.log(a<=b); // less or equal
console.log(a!=b); // not equal : as a = b 
console.log(a!==b); // not equal datatypes
console.log(a>b); // greater
console.log(a<b); // less

// ternary : age function of voting
let age = 19
let vote = (age > 18) ? "yes, i can vote" : "no, i can't vote";
console.log(vote);

// logical
let and = (true && true);
let or = (true || false);
let not = !(true);
console.log(and+" "+or+" "+not);

// working with non-booleans : falsy and truthy 
console.log(false || "shine" && "suri"); // true

// bitwise
console.log(~0); // 1's compliment, msb is 1 hence -1: flipping of bits
console.log(~(~0)); // 2's compliment, msb is 0 hence 0: flipping of bits
console.log(2 ^ 3); // xor

console.log(5 >> 1); // shift right by 1
console.log(5 << 1); // shift left by 1

// conditions
if (age > 18) {
    console.log("yes! you can vote!!");
}
else if (age = 18) {
    console.log("aww! congrats on 18!!");
} 
else {
    console.log("no! you can't vote :(")
}

let birth = 3
switch (birth) {
    case 1:
        console.log("aww! you're 1!!");
        break;
    case 3:
        console.log("aww! you're 3!!");
        break;
    default:
        break;
}
