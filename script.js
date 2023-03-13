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