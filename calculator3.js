//define our constants from the div classes in calculator3.html
const buttons = document.querySelectorAll('.number, .operator');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');
const display = document.querySelector('.display');

//add an eventListener to each of the numbers and operator buttons on click
buttons.forEach(button => {
  button.addEventListener('click', () => { 
    const buttonValue = button.getAttribute('data-num');
    display.textContent += buttonValue;
  })
})

//add an event listener to the equals button on click
equalsButton.addEventListener('click', () => { 
  display.textContent = eval(display.textContent).toLocaleString();
})

//add an event listener to the clear button on click
clearButton.addEventListener('click', () => { 
  display.textContent = "";
})


/*
//Does not work, breaks calculator.
var element = document.getElementsByClassName('equals');
var style = window.getComputedStyle(element);

var backgroundColor;
var buttonColor = element.style.backgroundColor;

if(buttonColor == 'gray') {
	return;
}

//turns red
$('.equals').css('background-color', '#cc1423');
//turns gray
$('.clear').css('background-color', 'gray');
*/