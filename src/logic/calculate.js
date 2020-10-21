import operate from './operate';

const calculate = (
  calObj = {
    total: '',
    next: '',
    operation: '',
  },
  btnName,
) => {
  const data = calObj;
  const { total, next, operation } = data;
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const mathSymbols = ['+', '-', 'x', '÷', '%'];

  if (btnName === 'AC') {
    data.total = '';
    data.next = '';
    data.operation = '';
  }

  if (btnName === '+/-') {
    if (total && !next) {
      data.total = total * -1;
    }
    if (next) {
      data.next = next * -1;
    }
  }

  if (btnName === '.') {
    if (!total && !next) {
      data.total += btnName;
    }
    if (total && !next) {
      data.next += btnName;
    }
  }

  if (numbers.includes(btnName)) {
    if (!total || (total && !operation)) {
      data.total += btnName;
    }
    if (total && operation) {
      data.next += btnName;
    }
  }

  if (mathSymbols.includes(btnName) && total) {
    data.operation = btnName;
  }

  if (btnName === '=') {
    const numberOne = data.total;
    const numberTwo = data.next;
    const mathSymbol = data.operation;

    return operate(numberOne, numberTwo, mathSymbol);
  }

  return data;
};

export default calculate;
