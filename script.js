'use strict';
const container = document.querySelector('.container');
const currentOperation = document.querySelector('.current-operation');
const previousOperation = document.querySelector('.current-operation');
const buttons = document.querySelectorAll('button');

let currentOperationArray = [];

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    const clicked = e.target;
    const buttonValue = e.target.textContent;
    const action = clicked.dataset.action;

    if (!action) {
      console.log('number');

      let value = (currentOperation.textContent += buttonValue);

      console.log(value);
    }

    if (action) {
      if (
        buttonValue === '+' ||
        buttonValue === '-' ||
        buttonValue === '*' ||
        buttonValue === '÷'
      ) {
        console.log('operand');
        currentOperation.textContent += ' ' + buttonValue;
      }
    }

    if (action) {
      if (buttonValue === '=') {
        console.log('equal');
      }
    }

    if (buttonValue === 'AC') {
      console.log('clear');
      currentOperation.textContent = '';
    }

    if (buttonValue === '.') {
      console.log('decimal');
    }
  });
});

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    // ...
  }
});
