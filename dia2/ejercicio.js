/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

class LibroTrans {
  constructor() {
    this.listaTrans = [];
  }

  addTransaccion(transaccion) {
    this.listaTrans.push(transaccion);
  }

  calculaAmountForAccount(cuenta) {
    return this.listaTrans.reduce(function(valorAnterior, valorActual) {
      if (valorActual.remitente == cuenta) {
        return valorAnterior + valorActual.cantidad;
      }
    }, 0);
  }

  findTransactionsForAccount(cuenta) {
    return this.listaTrans.filter(function(transaccion) {
      if (transaccion.remitente == cuenta || transaccion.receptor == cuenta) {
        return true;
      } else {
        return false;
      }
    });
  }
}

class Cuenta {
  constructor(nombre, banco) {
    this.nombre = nombre;
    this.banco = banco;
  }
}

class Transaccion {
  constructor(remitente, receptor, cantidad, referencia) {
    this.remitente = remitente;
    this.receptor = receptor;
    this.cantidad = cantidad;
    this.referencia = referencia;
  }
}

class Comercial extends Cuenta {
  constructor(nombre, banco) {
    super(nombre, banco);
    this.tarifa = 0.02;
  }
}

class Privada extends Cuenta {
  constructor(nombre, banco) {
    super(nombre, banco);
    this.tarifa = 0.01;
  }
}

let banco = new LibroTrans();

let cuenta1 = new Comercial("cuenta1", banco);
console.log(cuenta1);

let cuenta2 = new Privada("cuenta2", banco);
console.log(cuenta2);

let transaccion1 = new Transaccion(cuenta1, cuenta2, 5);
let transaccion2 = new Transaccion(cuenta1, cuenta2, 5);
let transaccion4 = new Transaccion(cuenta2, cuenta2, 5);
let transaccion3 = new Transaccion(cuenta1, cuenta2, 5);
console.log(transaccion1);

banco.addTransaccion(transaccion1);
banco.addTransaccion(transaccion2);
banco.addTransaccion(transaccion3);
console.log(banco.listaTrans);

let acumulado = banco.calculaAmountForAccount(cuenta1);
console.log(acumulado);

console.log(banco.findTransactionsForAccount(cuenta1));
