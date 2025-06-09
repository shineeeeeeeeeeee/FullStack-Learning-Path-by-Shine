// dom manipulation using html : document object model, html to js object converted called document and whole is called dom.
// window is a global object (root)
// tokenizer converts tags into tokens called nodes and these nodes forms dom : html contents
// bom : browser object model, interactions with browser

let a = document.getElementById("fpara");
let b = document.getElementsByClassName('para');
let c = document.getElementsByTagName('p');

console.log("ID element:", a);
console.log("Class elements:", b);

document.querySelector('#fpara'); // . for class and normal for tag
// this method only returns one output (first most)

document.querySelectorAll('p'); // this returns all
// in inspect elements have $0 and so on, it will be printed in
// update existing element
Button.innerHtml = '<p>hello</p>' // gets and sets inner elements
// outer returns the entire doc as string

let element = document.querySelector('#fdiv');
element.textContent // texts are return
// innertext : same but it shows ui render

let head = document.createElement('h1');  // to create and add element
head.textContent = 'shine suri';
let bodyTag = document.querySelector('body');
bodyTag.appendChild(head);

{/* <div>
        hello
        <div id="mydiv">
            <p class='para'>First</p>
            <h1>Second</h1>
            <p>Third</p>
        </div>
    </div> */}

let mydiv = document.querySelector('mydiv');
let newElement = document.createElement('span');
newElement.textContent = ' this is me ';
mydiv.insertAdjacentElement('beforebegin', newElement); // afterbegin, beforeend, afterend

let parent = child.parentElement; //document.querySelector('#mydiv');
let child = document.querySelector('.para');
parent.removeChild(child); // removes element