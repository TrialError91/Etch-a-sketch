let dimensions = 4
const container = document.querySelector('.container')
let operator = (100/dimensions)
const gridBtn = document.querySelector('button')
let userInput
container.setAttribute("style", `display: grid; grid-template-columns:repeat(${dimensions}, ${operator}%);
    grid-template-rows:repeat(${dimensions}, ${operator}%)`)
for (let i=0; i<(dimensions*dimensions); i++) {
    container.appendChild(document.createElement('div'))
};

let squares = document.querySelectorAll('.container div')
let red
let green
let blue
function setColor (e) {
    red=+Math.floor(Math.random()*255)
    green=+Math.floor(Math.random()*255)
    blue=+Math.floor(Math.random()*255)
    e.target.setAttribute("style", `background-color: rgb(${red}, ${green}, ${blue})`)
};

squares.forEach((square)=> {
    square.addEventListener('mouseover', setColor, true)
});