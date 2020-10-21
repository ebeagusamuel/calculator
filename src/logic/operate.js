import Big from "big.js";

const operate = (numberOne, numberTwo, operation) => {
  let ans;
  try {

    const one = Big(numberOne);
    let two;
    if (numberTwo === "") {
      two = 0;
    } else {
      two = Big(numberTwo);
    }

    if (operation === "x") {
      ans = one.times(two);
    }
    if (operation === "+") {
      ans = one.plus(two);
    }
    if (operation === "-") {
      ans = one.minus(two);
    }
    if (operation === "÷") {
      ans = one.div(two);
    }
    if (operation === "%") {
      ans = one.div(Big("100"));
    }

    
    ans = ans.toPrecision();
  } catch (e) {
    ans = 'NaN'
  }
  return ans
};

export default operate;
