const prompt = require('prompt-sync')(); // ✅ require

class CuentaBancaria {
    #saldoInicial
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldoInicial = saldoInicial;

    }
    setSaldo(monto) {
        return this.#saldoInicial += monto;
    }
    getSaldo() {
       return (`el saldo es de: ${this.#saldoInicial}`)
       
    }
    extraer(monto) {
        if (monto <= this.#saldoInicial) {
            this.#saldoInicial -= monto;
        } else {
            console.log("saldo insuficiente");
        }
    }
}



const depositado = new CuentaBancaria("alan", 150);

let sumar = Number(prompt("ingrese un monto: "))



depositado.setSaldo(sumar)
depositado.extraer(500)
console.log(depositado.getSaldo())
// console.log(CuentaBancaria.#saldoInicial)