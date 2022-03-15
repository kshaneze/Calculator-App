'use strict';
const container = document.querySelector('.container');
const currentOperation = document.querySelector('.current-operation');
const previousOperation = document.querySelector('.current-operation');
const buttons = document.querySelectorAll('button');

let currentOperationArray = [];



buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    let buttonValue = e.target.textContent;

    if(buttonValue.)
    // Adding clicked elements to the current operation text
    currentOperation.textContent += buttonValue;
    // Adding values from pressed button into array
    currentOperationArray.push(buttonValue);

    // add numbers that are seperated with (+, -, /, *, =, AC) in one array

    // calculate seperated numbers

    // Implement function to calculate numbers when  = is clicked

    // display calculated number

    console.log(currentOperationArray);
    // If buttion AC is cllicked, clear current operation content
    if (buttonValue == 'AC') {
      currentOperation.textContent = '';
    }

    if (buttonValue == '+') {
    }
  });
});
