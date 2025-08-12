// El saldo debe ser una propiedad privada simulada.
// Usá un getter y setter para acceder y modificar el saldo.
// No se permite acceder directamente a saldo desde afuera
// Aplicar validaciones que el saldo no pueda ser negativo.

const prompt = require('prompt-sync')();
class CuentaBancaria {
    #saldoInicial
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldoInicial = saldoInicial;

    }
    
    setSaldo(monto) {
        if(monto>0){

            console.log("el saldo ingresado no puede ser negativo")
            return
        }
        else{
            return this.#saldoInicial += monto;
        }
    }

    getSaldo() {
        if(this.#saldoInicial<0){
            console.log("el saldo no puede ser negativo")
        }else{

            return (`el saldo es de: ${this.#saldoInicial}`)
        }
    }
    extraer(monto) {
        if (monto <0) {
            console.log("saldo insuficiente");
        } else {
            this.#saldoInicial -= monto;
        }
    }
}



const depositado = new CuentaBancaria("alan", 150);

let sumar = Number(prompt("ingrese un monto: "))



depositado.setSaldo(sumar)
depositado.extraer(500)
console.log(depositado.getSaldo())
