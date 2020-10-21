import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let ans;

  const one = Big(numberOne);
  let two;
  if (numberTwo === '') {
    two = 0;
  } else {
    two = Big(numberTwo);
  }

  if (operation === 'x') {
    ans = one * two;
  }
  if (operation === '+') {
    ans = one + two;
  }
  if (operation === '-') {
    ans = one - two;
  }
  if (operation === '÷') {
    ans = one / two;
  }
  if (operation === '%') {
    ans = one / 100;
  }

  return ans;
};

export default operate;
