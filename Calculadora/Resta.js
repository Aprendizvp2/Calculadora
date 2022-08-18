function operatorSubstractSelected() {
  myOperation.operator = buttonOperatorSubstract.value;
}

function operation() {
  setOneSelected();
  setTwoSelected();
  const operator = myOperation.operator;
  substract(myOperation.setOne, myOperation.setTwo);
}

function substract(setOne, setTwo) {
  const result = parseInt(setOne) - parseInt(setTwo);
  parrafoResult.innerHTML = result;
}