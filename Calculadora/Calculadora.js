const buttonSetOne = document.getElementById("setOne")
const buttonSetTwo = document.getElementById("setTwo")
const buttonOperatorAdittion = document.getElementById("button-operator-adittion")
const buttonOperatorSubstract = document.getElementById("button-operator-substract")
const buttonOperatorMultiplication = document.getElementById("button-operator-multiplication")
const buttonOperatorDivision = document.getElementById("button-operator-division")
const buttonOperatorModule = document.getElementById("button-operator-module")
const buttonResult = document.getElementById("button-result")

const parrafoResult = document.getElementById("parrafo-result")

const myOperation = {
  setOne: "",
  setTwo: "",
  operator: "",
  result: "",
};

buttonOperatorAdittion.addEventListener("click", operatorAdittionSelected)
buttonOperatorSubstract.addEventListener("click", operatorSubstractSelected)
buttonOperatorMultiplication.addEventListener("click", operatorMultiplicationSelected)
buttonOperatorDivision.addEventListener("click", operatorDivisionSelected)
buttonOperatorModule.addEventListener("click", operatorModuleSelected)
buttonResult.addEventListener("click", operation)

function setOneSelected() {
  myOperation.setOne = buttonSetOne.value
}

function setTwoSelected() {
  myOperation.setTwo = buttonSetTwo.value
}

function operatorAdittionSelected() {
  myOperation.operator = buttonOperatorAdittion.value
}

function operatorSubstractSelected() {
    myOperation.operator = buttonOperatorSubstract.value
}

function operatorMultiplicationSelected() {
    myOperation.operator = buttonOperatorMultiplication.value
}

function operatorDivisionSelected() {
    myOperation.operator = buttonOperatorDivision.value
}

function operatorModuleSelected() {
  myOperation.operator = buttonOperatorModule.value
}

function operation() {
  setOneSelected();
  setTwoSelected();
  const operator = myOperation.operator

  switch (operator) {
    case "+":
      adittion(myOperation.setOne, myOperation.setTwo)
      break;
    case "-":
      substract(myOperation.setOne, myOperation.setTwo)
      break;
    case "*":
      multiplication(myOperation.setOne, myOperation.setTwo)
      break;
    case "/":
      division(myOperation.setOne, myOperation.setTwo)
      break;
    case "%":
      division(myOperation.setOne, myOperation.setTwo)
      break;
  }
}

function adittion(setOne, setTwo) {
  const result = parseInt(setOne) + parseInt(setTwo)
  parrafoResult.innerHTML = result
}

function substract(setOne, setTwo) {
  const result = parseInt(setOne) - parseInt(setTwo)
  parrafoResult.innerHTML = result
}

function multiplication(setOne, setTwo) {
  const result = parseInt(setOne) * parseInt(setTwo)
  parrafoResult.innerHTML = result
}

function division(setOne, setTwo) {
  const result = parseInt(setOne) / parseInt(setTwo)
  parrafoResult.innerHTML = result
}

function division(setOne, setTwo) {
  const result = parseInt(setOne) % parseInt(setTwo)
  parrafoResult.innerHTML = result
}
