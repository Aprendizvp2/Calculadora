function operatorMultiplicationSelected() {
  myOperation.operator = buttonOperatorMultiplication.value
}

function operation() {
  setOneSelected();
  setTwoSelected();
    multiplication(myOperation.setOne, myOperation.setTwo)
}

function multiplication(setOne, setTwo) {
  const result = parseInt(setOne) * parseInt(setTwo)
  parrafoResult.innerHTML = result
}