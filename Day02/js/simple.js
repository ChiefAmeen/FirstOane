// how to look for an element in the DOM
const button = document.querySelector('button');
const input = document.querySelector('input');

let howManyClicks = 0; // create variable to hold number of clicks

button.addEventListener('click', function() { // add event listener to button for click
    howManyClicks += 1; // add 1 to howManyClicks the variable
    button.innerText = howManyClicks; // change the text of the button to howManyClicks
    button.style.backgroundColor = input.value; // change the background color of the button to the value of the input
});
console.log(button);