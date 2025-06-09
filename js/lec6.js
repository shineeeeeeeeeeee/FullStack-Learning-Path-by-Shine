// arrays : reference type (obj, arr, func) as they don't have a fixed size
// memory are of 2 types : stack (primitive) and heap (non - primitive)

// values stored in heap and the address pointer to acquire it is stored in stack
// obj is the collection of key-value pairs

let obj = {
    name : "Shine",
    age: 25,
    weight: 35,
    height: "6ft 1in",
    greet: function() {
        console.log("Hello!");
    }
};

console.log(obj);
obj.greet();
console.log(typeof(obj));

let obj2 = obj; // shallow copy as no actual data created

// arrays : collection of items
// array constructor
let arr = [1, 2]
let a = new Array('shine', 1, true)
console.log(a);
console.log(typeof(arr) + " " + typeof(a));

// built-in methods
arr.push(3) // adds element at last
arr.pop() // removes last element
arr.shift(); // removes first element
arr.unshift(1, 2, 3, 4, 5) // adds element at first
arr.slice(2, 4) // exclude last

arr.splice(1, 2, 'shine') // removes 2 elements at arr[1] and replace it with shine
// used to insert, replace and remove

// map : a function
num = [1,2,3,4,5,6,7]
let answer = num.map((number, index) => {
    console.log(index + " " + number);
    return number*number;
})
console.log(answer);

// filter : adds a condition that includes and excludes
let even = num.filter((number) => {
    return number % 2 == 0;
    // if(number % 2 == 0){
    //     return true
    // }
    // else{
    //     return false
    // }
})

let sentence = ['shine', 'kunal', 1, "shine"];
let char = sentence.filter((value) => {
    return typeof(value) == "string";
})
console.log(even);
console.log(char)

// reduce : used in complex calc to get a single output
// acc, curr, takes first two on it's own values gets assigned if not mentioned

let red = [1,2,3,4,5,5,6,7,7]
let b = red.reduce((acc, curr) => {
    return acc + curr;
}, 0 //assigned from 0
)
console.log(b)

let blue = [4,6,2,3,8,1,9,4,3]
blue.sort();
// let c = blue.sort((a,b) => {
//     return b - a
// }) for descending 

console.log(blue.indexOf(5)) // find index

// find
let fin = blue.find((num) => {
    return num > 3;
})
console.log(fin)

// for-each : array, for-in : objects, for-of : iterables (arr, str, maps, sets)
blue.forEach((value, index) => {
    console.log(index + ": " + value);
})

for (const key in obj) {
    const element = obj[key];
    console.log(key + " " + element);
}

for (const element of blue) {
    console.log(element);
}

// array with func
let d = [1,2,3,4,5,6]
let e = function (array){
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

console.log(e(d))