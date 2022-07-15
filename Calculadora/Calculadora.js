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
const punto = document.getElementById('punto');

const igual = document.getElementById('igual');

const buttonUno = document.getElementById('uno'); //const //document - OBJETO
const buttonDos = document.getElementById('dos');
const buttonTres = document.getElementById('tres');
const buttonCuatro = document.getElementById('cuatro');
const buttonCinco = document.getElementById('cinco');
const buttonseis = document.getElementById('seis');
const buttonsiete = document.getElementById('siete');
const buttonocho = document.getElementById('ocho');
const buttonnueve = document.getElementById('nueve');
const buttoncero = document.getElementById('cero');

punto.addEventListener('click', function () {
  if (operador == "") {
    if (operadorA == '') {
      resultado.innerHTML = '0.';
    } else {
      if (operadorA != '') {
        resultado.innerHTML = resultado.innerHTML + '.';
      }
    }
    operadorA = resultado.innerText;
  } else {
    if (operadorB == '') {
      resultado.innerHTML = '0.';
    } else {
      if (operadorB != '') {
        resultado.innerHTML = resultado.innerHTML + '.';
      }
      operadorB = resultado.innerText;
    }
  }
}
);
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

buttonnueve.addEventListener('click', function () {
  if (operador == '') {
    if (operadorA == '') {
      resultado.innerHTML = '9';
    } else {
      resultado.innerHTML = resultado.innerHTML + '9';
    }

    operadorA = resultado.innerText;
    console.log(operadorA);
  } else {
    if (operadorB == '') {
      resultado.innerHTML = '9';
    } else {
      resultado.innerHTML = resultado.innerHTML + '9';
    }
    operadorB = resultado.innerText;
    console.log(operadorB);
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
      resultado.innerHTML = '0';
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

clear.addEventListener('click', function () {
  if (resultado != '') {
    resultado.innerHTML = ''
  }
});

igual.addEventListener('click', function () {
  switch (operador) {
    case '+':
      sumaOperator();
      break;
    default:
      break;
  }
});
