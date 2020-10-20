const calculate = (
  calObj = {
    total: "",
    next: "",
    operation: "",
  },
  btnName
) => {
  let {total, next, operation} = calObj;
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  const mathSymbols = ['+', '-', 'X', '÷', '%']

  if(btnName === 'AC'){
    calObj.total = ''
    calObj.next = ''
    calObj.operation = ''

    return calObj
  }

  if(btnName === '+/-'){
    if(total && !next){
      calObj.total = total * (-1)
    }
    if(next){
      calObj.next = next * (-1)
    }

    return calObj
  }

  if(btnName === '.'){
    if(!total && !next){
      calObj.total += btnName
    }
    if(next){
      calObj.next += btnName
    }

    return calObj
  }

  if(numbers.includes(btnName)){
    if(!total || (total && !operation)){
      calObj.total += btnName
    }
    if(total && operation){
      calObj.next += btnName
    }

    return calObj
  }

  if(mathSymbols.includes(btnName)){
    calObj.operation = btnName

    return calObj
  }

  if(btnName === '='){
    let numberOne = calObj.total
    let numberTwo = calObj.next
    let mathSymbol = calObj.operation

    return operate(numberOne, numberTwo, mathSymbol)
  }
};

console.log(calculate({total: '890', next: '', operation: 'X'}, '5'))
