let operadorA = '';
let operadorB = '';
let operador = '';
let digito = '';
const resultado = document.getElementById('resultado');
const reset = document.getElementById('reset');
const suma = document.getElementById('suma');
const resta = document.getElementById('resta');
const multiplicacion = document.getElementById('multiplicacion');
const division = document.getElementById('division');

const igual = document.getElementById('igual');

const buttonUno = document.getElementById('uno'); //const //document - OBJETO
const buttonDos = document.getElementById('dos');
const butonTres = document.getElementById('tres');
const buttonCuatro = document.getElementById('cuatro');
const buttonCinco = document.getElementById('cinco');
const seis = document.getElementById('seis');
const siete = document.getElementById('siete');
const ocho = document.getElementById('ocho');
const nueve = document.getElementById('nueve');
const cero = document.getElementById('cero');

buttonUno.addEventListener('click', function () {
  if (operador == '') {
    if (operadorA == '') {
      resultado.innerHTML = '1';
    } else {
      resultado.innerHTML = resultado.innerHTML + '1';
    }

    operadorA = resultado.innerText;
    console.log(operadorA);
  } else {
    if (operadorB == '') {
      resultado.innerHTML = '1';
    } else {
      resultado.innerHTML = resultado.innerHTML + '1';
    }
    operadorB = resultado.innerText;
    console.log(operadorB);
  }
});

let newDos = ""
buttonDos.addEventListener('click', function () {
 
  if (operador == '') {
    if (operadorA == '') {
      resultado.innerHTML = '2';
    } else {
      resultado.innerHTML = resultado.innerHTML + '2';
    }

    operadorA = resultado.innerText;
    console.log(operadorA);
  } else {
    
    resultado.innerHTML = resultado.innerHTML + '2';
    
    console.log(newDos);
    console.log(newDos = newDos + "2");
    operadorB = newDos
  }
});

suma.addEventListener('click', function () {
  if (operadorA == '') {
    operadorA = '0';
  }
  operador = '+';
  resultado.innerHTML = resultado.innerHTML + '+';
});

igual.addEventListener('click', function () {
  switch (operacion) {
    case '+':
      sumaOperator();
      break;
    default:
      break;
  }
});
