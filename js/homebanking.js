//Declaración de variables
let nombreUsuario = "Kevin";
let saldoCuenta = 3520;
let limiteExtraccion = 1000;
let saldoInversiones = 0;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML
iniciarSesion();
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();
actualizarSaldoInversiones();

//Funciones globales reutilizables

function guardarSaldoAnterior(){
  saldoAnterior = saldoCuenta;
}

function valorIncorrecto (){
  alert("El valor ingresado es inválido, intentalo nuevamente.");
}

//Funciones que tenes que completar

function cambiarLimiteDeExtraccion() {
  limiteExtraccion = prompt("Por favor, ingresá el límite de extracción deseado.");
  if (isNaN(limiteExtraccion) === false && limiteExtraccion>0){
    actualizarLimiteEnPantalla();
    alert("Hemos actualizado tu límite de extracción. El nuevo límite es de $"+limiteExtraccion);
  } else {
      valorIncorrecto();
  }
}

function extraerDinero(din) {
  //funciones reutilizables
  function ejecutarExtraccion() {
    saldoCuenta -= din;
    actualizarSaldoEnPantalla();
  }

  din = parseInt(prompt("Por favor, ingresá la cantidad de dinero a extraer de tu cuenta"));
  guardarSaldoAnterior();
  multiplo = din%100;
  if(din>limiteExtraccion){
      alert("Lo lamentamos, pero el saldo que se quiere extraer es mayor al límite de extracción.");
  } else if(din>saldoAnterior) {
      alert("Lo lamentamos, pero el saldo disponible es insuficiente para efectuar la operación solicitada.");
  } else if(multiplo>0) {
      alert("Lo lamentamos, pero solamente pueden extraerse montos múltiplos de 100.");
  } else if(isNaN(din) === true || din < 1){
    valorIncorrecto();
  } else {
      ejecutarExtraccion();
    alert("El importe extraido es de $"+din+
    "\nEl saldo anterior es de $"+saldoAnterior+
    "\nEl saldo actual es de $"+saldoCuenta+".");
 }
}

function depositarDinero(din) {
  //funciones reutilizables
  function ejecutarDeposito() {
    saldoCuenta += din;
    actualizarSaldoEnPantalla();
  }

  din = parseInt(prompt("Por favor, ingresá la cantidad de dinero a depositar en tu cuenta"));
  guardarSaldoAnterior();
  if(isNaN(din) === false && din > 0){
    ejecutarDeposito();
    alert("El importe depositado es de $"+din+
    "\nEl saldo anterior es de $"+saldoAnterior+
    "\nEl saldo actual es de $"+saldoCuenta+".");
} else {
    valorIncorrecto();
  }
}

function pagarServicio() {
//Funciones reutilizables
  function saldoInsuficiente(){
    alert("Lo lamentamos, pero el saldo es insuficiente para realizar la operación solicitada.");
  }

  function servicioAbonado(){
    saldoCuenta -= costo[servicio-1];
    alert("Felicitaciones. Has abonado el servicio de "+nombreServicio[servicio-1]+
    ". \nSe han descontado: $"+costo[servicio-1]+
    "\nSaldo actual: $"+saldoCuenta+".");
    actualizarSaldoEnPantalla();
  }

  function procesoPago() {
    if (costo[servicio-1]>saldoAnterior) {
      saldoInsuficiente();
  } else {
      servicioAbonado();
    }
  }
  // hasta aquí funciones reutilizables
  // Si bien no trabajados en curso web, se utilizan arrays vistos en el curso JavaScript 101. También trabajé una variante
  // que evita la repetición de código en todos los casos del switch, pero dado que la consigna indicaba que debia usarse
  // switch, evité hacerlo de esa forma. No obstante la transcribo a continuación:
  //
  // function pagarServicio() {
  //     nombreServicio = ["Agua", "Telefono", "Luz", "Internet", "Expensas"];
  //     costo = [350, 425, 210, 570, 2800];
  //     let servicio = parseInt(prompt("Por favor, indicá el número correspondiente al servicio que querés pagar: \n 1. Agua \n 2. Teléfono \n 3. Luz \n 4. Internet \n 5. Expensas"));
  //       guardarSaldoAnterior();
  //       procesoPago();
  //
  //   function saldoInsuficiente(){
  //     alert("Lo lamentamos, pero el saldo es insuficiente para realizar la operación solicitada.");
  //   }
  //
  //   function servicioAbonado(){
  //     saldoCuenta -= costo[servicio-1];
  //     alert("Felicitaciones. Has abonado el servicio de "+nombreServicio[servicio-1]+
  //     ". \nSe han descontado: $"+costo[servicio-1]+
  //     "\nSaldo actual: $"+saldoCuenta+".");
  //   }
  //
  //   function procesoPago() {
  //     if (costo[servicio-1]>saldoAnterior) {
  //       saldoInsuficiente();
  //   } else if (costo[servicio-1]<saldoAnterior){
  //       guardarSaldoAnterior();
  //       servicioAbonado();
  //       actualizarSaldoEnPantalla();
  //   } else {
  //     alert("Debés ingresar un número que corresponda a alguno de los servicios listados. Intentalo nuevamente.");
  //       }
  //     }
  //
  //   }
  //
  nombreServicio = ["Agua", "Telefono", "Luz", "Internet", "Expensas"]
  costo = [350, 425, 210, 570, 2800];
  let servicio = parseInt(prompt("Por favor, indicá el número correspondiente al servicio que querés pagar: \n 1. Agua \n 2. Teléfono \n 3. Luz \n 4. Internet \n 5. Expensas"));
    guardarSaldoAnterior();
    switch(servicio){
      case 1:
          if (costo[servicio-1]>saldoAnterior) {
            saldoInsuficiente();
        } else {
            servicioAbonado();
        } break;
        case 2:
        if (costo[servicio-1]>saldoAnterior) {
          saldoInsuficiente();
        } else {
          servicioAbonado();
        } break;
      case 3:
        if (costo[servicio-1]>saldoAnterior) {
        saldoInsuficiente();
        } else {
        servicioAbonado();
        } break;
      case 4:
        if (costo[servicio-1]>saldoAnterior) {
        saldoInsuficiente();
        } else {
        servicioAbonado();
        } break;
      case 5:
        if (costo[servicio-1]>saldoAnterior) {
        saldoInsuficiente();
        } else {
        servicioAbonado();
        } break;
      default:
          alert("Debés ingresar un número que corresponda a alguno de los servicios informados. Intentalo nuevamente.");
        }
    }

function transferirDinero() {
  let cuentaAmiga = [12345, 678910];
  let montoTransferencia = parseInt(prompt("Por favor, ingresá el importe que querés transferir."));
    guardarSaldoAnterior();
  //función reutilizable
  function hacerTrasferencia() {
    saldoCuenta -= montoTransferencia;
    actualizarSaldoEnPantalla();
  }

    if(montoTransferencia > saldoAnterior){
      alert("Lo lamentamos, pero el saldo disponible es insuficiente para transferir el monto ingresado");
  } else if (isNaN(montoTransferencia) === true || montoTransferencia < 1){
      valorIncorrecto();
  } else {
      let cuentaDestino = parseInt(prompt("Por favor, ingresá el número de la cuenta de destino de la transferencia"));
      if(cuentaDestino === cuentaAmiga[0] || cuentaDestino === cuentaAmiga[1]){
        hacerTrasferencia();
        alert("¡Felicitaciones! Has transferido $"+montoTransferencia+" a la cuenta nro. "+cuentaDestino);
    } else {
        alert("Lo lamentamos, pero solamente pueden transferirse importes a cuentas previamente cargadas como amigas.");
    }
  }
}

function iniciarSesion() {
  let codigoSeguridad = 1234;
  let codigoInicio = prompt ("Bienvenido/a "+nombreUsuario+". Por favor ingresa tu código de seguridad para comenzar a operar.");
    codigoInicio = parseInt(codigoInicio);
    if(codigoInicio === codigoSeguridad) {
      alert("Muchas gracias "+nombreUsuario+". Ya podés realizar operaciones.");
    } else {
      saldoCuenta = 0;
      alert("Código incorrecto. Tu dinero ha sido retenido por razones de seguridad.");
  }
}

function constituirPlazoFijo() {
  //funciones reutilizables
  function ejecutarPlazoFijo() {
    saldoCuenta -= montoPlazoFijo;
    saldoInversiones += Math.round(montoPlazoFijo*1.1);
  }

  let montoPlazoFijo = parseInt(prompt ("Por favor, ingresá el importe por el cual querés constituir tu plazo fijo. El mismo se volverá inutilizable y devengará un interés del 10%."));
  guardarSaldoAnterior();
  if(montoPlazoFijo > limiteExtraccion){
      alert("Lo lamentamos, pero el saldo disponible es insuficiente para efectuar la operación.");
  } else if (isNaN(montoPlazoFijo) === true || montoPlazoFijo < 1){
      valorIncorrecto();
  } else {
      ejecutarPlazoFijo();
      actualizarSaldoEnPantalla();
      actualizarSaldoInversiones();
      alert("Felicitaciones. Has constituido un plazo fijo por el importe de $ "+montoPlazoFijo+
      ". \nTu saldo disponible ahora es de $ " +saldoCuenta+
      ". \nEl plazo fijo con intereses devengados constituye un total de $ "+Math.round(montoPlazoFijo*1.1)+
      ". \nEl saldo de tu cuenta de inversiones es de $ "+saldoInversiones+".");
  }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarSaldoInversiones() {
  document.getElementById("saldo-inversiones").innerHTML = "$" + saldoInversiones;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
