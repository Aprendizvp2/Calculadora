let operadorA = '';
let operadorB = '';
let operador = '';
let digito = '';
const resultado = document.getElementById('resultado');
const clear = document.getElementById('clear');
const suma = document.getElementById('suma');
const resta = document.getElementById('resta');
const multiplicacion = document.getElementById('multiplicacion');
const division = document.getElementById('division');
const modulo = document.getElementById('modulo');
const punto = document.getElementById('punto');
const igual = document.getElementById('igual');
const buttonUno = document.getElementById('uno');
const buttonDos = document.getElementById('dos');
const buttonTres = document.getElementById('tres');
const buttonCuatro = document.getElementById('cuatro');
const buttonCinco = document.getElementById('cinco');
const buttonseis = document.getElementById('seis');
const buttonsiete = document.getElementById('siete');
const buttonocho = document.getElementById('ocho');
const buttonnueve = document.getElementById('nueve');
const buttoncero = document.getElementById('cero');
const operacionCompleta = document.getElementById('operacionCompleta');

punto.addEventListener('click', function () {
  if (operador == '') {
    if (operadorA == '') {
      resultado.innerHTML = '0.';
      operadorA = resultado.innerText;
    } else {
      if (operadorA != '') {
        resultado.innerHTML = resultado.innerHTML + '.';
      }
    }
    operadorA = resultado.innerText;
  } else {
    if (operadorB == '') {
      resultado.innerHTML = '0.';
      operadorB = resultado.innerText;
    } else {
      if (operadorB != '') {
        resultado.innerHTML = resultado.innerHTML + '.';
      }
      operadorB = resultado.innerText;
    }
  }
});
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
    if (operadorB == '') {
      resultado.innerHTML = '2';
    } else {
      resultado.innerHTML = resultado.innerHTML + '2';
    }
    operadorB = resultado.innerText;
    console.log(operadorB);
  }
});

buttonTres.addEventListener('click', function () {
  if (operador == '') {
    if (operadorA == '') {
      resultado.innerHTML = '3';
    } else {
      resultado.innerHTML = resultado.innerHTML + '3';
    }

    operadorA = resultado.innerText;
    console.log(operadorA);
  } else {
    if (operadorB == '') {
      resultado.innerHTML = '3';
    } else {
      resultado.innerHTML = resultado.innerHTML + '3';
    }
    operadorB = resultado.innerText;
    console.log(operadorB);
  }
});

buttonCuatro.addEventListener('click', function () {
  if (operador == '') {
    if (operadorA == '') {
      resultado.innerHTML = '4';
    } else {
      resultado.innerHTML = resultado.innerHTML + '4';
    }

    operadorA = resultado.innerText;
    console.log(operadorA);
  } else {
    if (operadorB == '') {
      resultado.innerHTML = '4';
    } else {
      resultado.innerHTML = resultado.innerHTML + '4';
    }
    operadorB = resultado.innerText;
    console.log(operadorB);
  }
});

buttonCinco.addEventListener('click', function () {
  if (operador == '') {
    if (operadorA == '') {
      resultado.innerHTML = '5';
    } else {
      resultado.innerHTML = resultado.innerHTML + '5';
    }

    operadorA = resultado.innerText;
    console.log(operadorA);
  } else {
    if (operadorB == '') {
      resultado.innerHTML = '5';
    } else {
      resultado.innerHTML = resultado.innerHTML + '5';
    }
    operadorB = resultado.innerText;
    console.log(operadorB);
  }
});

buttonseis.addEventListener('click', function () {
  if (operador == '') {
    if (operadorA == '') {
      resultado.innerHTML = '6';
    } else {
      resultado.innerHTML = resultado.innerHTML + '6';
    }

    operadorA = resultado.innerText;
    console.log(operadorA);
  } else {
    if (operadorB == '') {
      resultado.innerHTML = '6';
    } else {
      resultado.innerHTML = resultado.innerHTML + '6';
    }
    operadorB = resultado.innerText;
    console.log(operadorB);
  }
});

buttonsiete.addEventListener('click', function () {
  if (operador == '') {
    if (operadorA == '') {
      resultado.innerHTML = '7';
    } else {
      resultado.innerHTML = resultado.innerHTML + '7';
    }

    operadorA = resultado.innerText;
    console.log(operadorA);
  } else {
    if (operadorB == '') {
      resultado.innerHTML = '7';
    } else {
      resultado.innerHTML = resultado.innerHTML + '7';
    }
    operadorB = resultado.innerText;
    console.log(operadorB);
  }
});

buttonocho.addEventListener('click', function () {
  if (operador == '') {
    if (operadorA == '') {
      resultado.innerHTML = '8';
    } else {
      resultado.innerHTML = resultado.innerHTML + '8';
    }

    operadorA = resultado.innerText;
    console.log(operadorA);
  } else {
    if (operadorB == '') {
      resultado.innerHTML = '8';
    } else {
      resultado.innerHTML = resultado.innerHTML + '8';
    }
    operadorB = resultado.innerText;
    console.log(operadorB);
  }
});

let miNueve = '';
buttonnueve.addEventListener('click', function () {
  if (operador == '') {
    if (operadorA == '') {
      resultado.innerHTML = '9';
    } else {
      resultado.innerHTML = resultado.innerHTML + '9';
    }

    operadorA = resultado.innerText;
  } else {
    miNueve = miNueve + '9';
    operadorB = miNueve;
    resultado.innerHTML = resultado.innerHTML + '9';
  }
});

buttoncero.addEventListener('click', function () {
  if (operador == '') {
    if (operadorA == '') {
      resultado.innerHTML = '0';
    } else {
      resultado.innerHTML = resultado.innerHTML + '0';
    }

    operadorA = resultado.innerText;
    console.log(operadorA);
  } else {
    if (operadorB == '') {
      resultado.innerHTML = resultado.innerHTML + '0';
    } else {
      resultado.innerHTML = resultado.innerHTML + '0';
    }
    operadorB = resultado.innerText;
    console.log(operadorB);
  }
});

suma.addEventListener('click', function () {
  if (operadorA == '') {
    operadorA = '0';
  }
  operador = '+';
  resultado.innerHTML = resultado.innerHTML + '+';
});

resta.addEventListener('click', function () {
  if (operadorA == '') {
    operadorA = '-';
  } else {
    operador = '-';
  }
  resultado.innerHTML = resultado.innerHTML + '-';
});

multiplicacion.addEventListener('click', function () {
  if (operadorA == '') {
    operadorA = '0';
  }
  operador = '*';
  resultado.innerHTML = resultado.innerHTML + '*';
});

division.addEventListener('click', function () {
  if (operadorA == '') {
    operadorA = '0';
  }
  operador = '/';
  resultado.innerHTML = resultado.innerHTML + '/';
});

modulo.addEventListener('click', function () {
  if (operadorA == '') {
    operadorA = '0';
  }
  operador = '%';
  resultado.innerHTML = resultado.innerHTML + '%';
});

clear.addEventListener('click', function () {
  if (resultado != '') {
    operadorA = '';
    operadorB = '';
    operador = '';
    resultado.innerHTML = '';
    operacionCompleta = '';
  }
});

igual.addEventListener('click', function () {
  switch (operador) {
    case '+':
      sumaOperator();
      operacionCompleta.innerHTML = operadorA + operador + operadorB;
      break;
    case '-':
      restaOperator();
      break;
    case '*':
      multiplicacionOperator();
      break;
    case '/':
      divisionOperator();
      break;
    case '%':
      moduloOperator();
      break;
    default:
      break;
  }
});

console.log(resultado);
