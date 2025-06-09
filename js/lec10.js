// in-built objects

// math
console.log(Math.PI);
console.log(Math.max(1,2,3));
console.log(Math.min(1,2,3));
console.log(Math.round(1.6)); // 2
console.log(Math.floor(1.6)); // 1
console.log(Math.ceil(1.2)); // 2
console.log(Math.abs(-6)); // converts to positive
console.log(Math.random()); // random number in between 0 and 1
console.log(Math.sqrt(3));
console.log(Math.pow(2, 10));

// date objects
let curr = new Date();
let date = new Date('June 20 2005 07:15');
let newDate = new Date(1998, 6, 6, 7);
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.setFullYear(2005));
console.log(newDate);