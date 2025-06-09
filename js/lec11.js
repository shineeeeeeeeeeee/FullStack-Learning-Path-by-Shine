// object cloning : dynamic nature
let src = {
    age : 76,
    weight : 54
}
// dynamic called as we can change it's property during runtime
src.color = "white";
console.log(src);

// spread operator
let dest = {...src};
console.log(dest);

// assign method
let dest2 = Object.assign({}, src);
console.log(dest2);

// iteration method
let dest3 = {};
for (const key in src) {
    let newKey = key;
    let newValue = src[key];
    // insert key-value in dest3 and do cloning
    dest3[newKey] = newValue;
}
console.log(dest3);

// garbage collector : utility used in memory management to free variables who are not in used to prevent memory leaks and improve performance
// no control, always runs in program