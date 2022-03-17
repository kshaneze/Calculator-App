class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  conpute() {}

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  choseOperation(operation) {}

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
  }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const allClear = document.querySelector('[data-all-clear]');
const equal = document.querySelector('[data-equal]');
const currentOperandTextElement = document.querySelector(
  '[data-current-operand]'
);
const previousOperandTextElement = document.querySelector(
  '[data-previous-operand]'
);
/////////////////////////////////////////////////////////

// Creating calculator class
const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);
// Adding buttons

numberButtons.forEach(button => {
  button.addEventListener('click', function () {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

allClear.addEventListener('click', function () {});
