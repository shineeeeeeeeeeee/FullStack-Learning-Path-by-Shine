// performance reflow and repaint

// code 1
const t1 = performance.now()
for (let index = 0; index < 100; index++) {
    let para = document.createElement('p');
    para.textContent = 'this is a para' + index;
    document.body.appendChild(para);
}
const t2 = performance.now()

console.log("total time by code: " + (t2-t1));

// code 2
const t3 = performance.now()
let mydiv = document.createElement('div');
for(let i = 1; i <= 100; i++){
    let para = document.createElement('p');
    para.textContent = 'this is a para' + i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);
const t4 = performance.now()
console.log("total time by code 2: " + (t4-t3));

// reflow: process of calculating position and dimension of an object being rendered (high computation)
// repaint: process of displaying content pixel by pixel
// document fragment: no reflow and repaint

// code 3
const t5 = performance.now()
let fragment = document.createDocumentFragment();
for(let i = 1; i <= 100; i++){
    let para = document.createElement('p');
    para.textContent = 'this is a para' + 100 + i;
    fragment.appendChild(para);
}
// takes 1 reflow and repaint
document.body.appendChild(fragment);
const t6 = performance.now()
console.log("total time by code 2: " + (t6-t5));