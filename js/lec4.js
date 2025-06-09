// loops and strings

let array = [1, 2, 3, 4]
// for loop 
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}

// break: comes out of loop, continue: skips the current iteration, 
for (let index = 0; index < 6; index++) {
    if (index == 2){
        console.log(index);
        break
    }
    else{
        console.log(index);
    }
}

// while loop: iterates till true
while (array.length > 0) {
    console.log(array);
    array.length--;
}

// do-while loop
let arr = [1, 2, 3, 4];
let i = 0;
do {
    console.log(arr[i]);
    i++;
} while (i < arr.length);

// strings: sequence of characters
let nam = 'shine';
console.log(typeof(nam));
let text = `
            Good
            Morning
            It
            Is
            A
            New
            Day
            `;
console.log(text);

let nam1 = 'shine '; let nam2 = 'suri '; let merge = nam1 + nam2;
console.log(merge)

let final = `${nam1}${nam2}`; console.log(final);
console.log(final.length);
console.log(final.toUpperCase());
console.log(final.substring(1,3)); // 1 index till 3 so 1 excluded and 2,3 included
console.log(final.split(" ")); // splits into words

let sen = "heheee \"heee\" heee hee"
console.log(sen);

let words = final.split(' ');
console.log(words);
console.log(words.join('-'));