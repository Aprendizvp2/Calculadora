function operatorDivisionSelected() {
  myOperation.operator = buttonOperatorDivision.value;
}

function operation() {
  setOneSelected();
  setTwoSelected();
  const operator = myOperation.operator;
  division(myOperation.setOne, myOperation.setTwo);
}

function division(setOne, setTwo) {
  const result = parseInt(setOne) / parseInt(setTwo);
  parrafoResult.innerHTML = result;
}
