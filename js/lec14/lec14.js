let element = document.getElementById('fp');
console.log(element.style) // prints para

element.style.backgroundColor = 'green'; // changes to green

let secElement = document.getElementById('sdiv');
secElement.style.cssText; // gets style
secElement.style.cssText = "background-color: white; text-color: black; padding: 0.2rem"; // sets style

let firstElement = document.querySelector('#fdiv');
firstElement.setAttribute('class', 'divClass'); // ADDS DIV
firstElement.setAttribute('style', 'padding : 0.1rem');

let para = $0;
para.className // returns class name
para.className = "b, c" // sets class name

para.classList // index wise classes
para.classList.add('e');
para.classList.remove('e');
para.classList.toggle('d') // if present then remove or else add
para.classList.contains('e') // checks if present return t or f