import operate from "./operate";

const calculate = (calObj, btnName) => {
  const data = calObj;
  const { total, next, operation } = data;
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const mathSymbols = ["+", "-", "x", "÷"];

  if (btnName === "AC") {
    data.total = "";
    data.next = "";
    data.operation = "";
  }

  if (btnName === "+/-") {
    if (total && !next) {
      data.total = total * -1;
    }
    if (next) {
      data.next = next * -1;
    }
  }

  if(btnName === '%'){
    if(total && !next){
      data.operation = btnName
    }
    const numberOne = data.total;
    const numberTwo = data.next;
    const mathSymbol = data.operation;

    let ans = operate(numberOne, numberTwo, mathSymbol);
    data.total = ans;
    data.next = '';
    data.operation = '';

    return data;
  }

  if (btnName === ".") {
    if (!total && !next) {
      data.total += `0${btnName}`;
    }
    if(total && !next && operation){
      data.next = `0${btnName}`
    }
    if(total && next && operation){
      data.next += btnName 
    }
    if (total && !next && !operation) {
      data.total += btnName;
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

  if (mathSymbols.includes(btnName)) {
    if(total && !next){
      data.operation = btnName;
    }

    if(total && next && operation){
      const numberOne = data.total;
      const numberTwo = data.next;
      const mathSymbol = data.operation;
  
      let ans = operate(numberOne, numberTwo, mathSymbol);
      data.total = ans;
      data.next = '';
      data.operation = btnName;
  
      return data; 
    }
  }

  if (btnName === "=" && total && next && operation) {
    const numberOne = data.total;
    const numberTwo = data.next;
    const mathSymbol = data.operation;

    let ans = operate(numberOne, numberTwo, mathSymbol);
    data.total = ans;
    data.next = '';
    data.operation = '';

    return data;
  }

  return data;
};

export default calculate;
