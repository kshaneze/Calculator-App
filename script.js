class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clearAll();
  }

  clearAll() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.slice(0, -1);
  }

  compute() {
    let computation;
    const priv = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(priv) || isNaN(current)) return;
    switch (this.operation) {
      case '+':
        computation = priv + current;
        break;
      case '-':
        computation = priv - current;
        break;
      case '*':
        computation = priv * current;
        break;
      case '÷':
        computation = priv / current;
        break;
      default:
        return;
    }

    this.currentOperand = computation;
    this.previousOperand = '';
  }

  appendNumber(number) {
    if (number == '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
    }
  }

  choseOperation(operation) {
    if (this.currentOperand == '') return;
    if (this.currentOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }
}

const allClear = document.querySelector('[data-all-clear]');
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equal = document.querySelector('[data-equal]');
const deleting = document.querySelector('[data-delete]');

const previousOperandTextElement = document.querySelector(
  '[data-previous-operand]'
);
const currentOperandTextElement = document.querySelector(
  '[data-current-operand]'
);

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach(button => {
  button.addEventListener('click', function () {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach(button => {
  button.addEventListener('click', function () {
    calculator.choseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equal.addEventListener('click', function () {
  calculator.compute();
  calculator.updateDisplay();
});

allClear.addEventListener('click', function () {
  calculator.clearAll();
  calculator.updateDisplay();
});

deleting.addEventListener('click', function () {
  calculator.delete();
  calculator.updateDisplay();
});

// class Calculator {
//   constructor(previousOperandTextElement, currentOperandTextElement) {
//     this.previousOperandTextElement = previousOperandTextElement;
//     this.currentOperandTextElement = currentOperandTextElement;
//     this.clear();
//   }

//   clear() {
//     this.currentOperand = '';
//     this.previousOperand = '';
//     this.operation = undefined;
//   }

//   conpute() {
//     let computation;
//     const priv = parseFloat(this.previousOperand);
//     const current = parseFloat(this.currentOperand);
//     if (isNaN(priv) || isNaN(current)) return;
//     switch (this.operation) {
//       case '+':
//         computation = priv + current;
//         break;
//       case '-':
//         computation = priv - current;
//         break;
//       case '*':
//         computation = priv * current;
//         break;
//       case '÷':
//         computation = priv / current;
//         break;
//       default:
//         return;
//     }
//     this.currentOperand = computation;
//     this.operation = undefined;
//     this.previousOperand = '';
//   }

//   appendNumber(number) {
//     if (number === '.' && this.currentOperand.includes('.')) return;
//     this.currentOperand = this.currentOperand.toString() + number.toString();
//   }

//   choseOperation(operation) {
//     if (this.currentOperand == '') return;
//     if (this.previousOperand !== '') {
//       this.conpute();
//     }
//     this.operation = operation;
//     this.previousOperand = this.currentOperand;
//     this.currentOperand = '';
//   }

//   updateDisplay() {
//     this.currentOperandTextElement.innerText = this.currentOperand;
//     this.previousOperandTextElement.innerText = this.previousOperand;
//   }
// }

// const numberButtons = document.querySelectorAll('[data-number]');
// const operationButtons = document.querySelectorAll('[data-operation]');
// const allClear = document.querySelector('[data-all-clear]');
// const equal = document.querySelector('[data-equal]');
// const currentOperandTextElement = document.querySelector(
//   '[data-current-operand]'
// );
// const previousOperandTextElement = document.querySelector(
//   '[data-previous-operand]'
// );
// /////////////////////////////////////////////////////////

// // Creating calculator class
// const calculator = new Calculator(
//   previousOperandTextElement,
//   currentOperandTextElement
// );
// // Adding buttons

// numberButtons.forEach(button => {
//   button.addEventListener('click', function () {
//     calculator.appendNumber(button.innerText);
//     calculator.updateDisplay();
//   });
// });

// operationButtons.forEach(button => {
//   button.addEventListener('click', function () {
//     calculator.choseOperation(button.innerText);
//     calculator.updateDisplay();
//   });
// });

// allClear.addEventListener('click', function () {
//   calculator.clear();
//   calculator.updateDisplay();
// });

// equal.addEventListener('click', function () {
//   calculator.conpute();
//   calculator.updateDisplay();
// });
