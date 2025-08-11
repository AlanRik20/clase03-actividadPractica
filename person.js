const prompt = require('prompt-sync')(); // ✅ require

function CuentaBancaria(titular, saldoInicial){
    this.titular=titular
    this.saldoInicial = saldoInicial

}

CuentaBancaria.prototype.depositar = function(monto){
    this.saldoInicial+=monto
}

CuentaBancaria.prototype.mostrar = function(){
    console.log(`${this.titular} tiene $${this.saldoInicial}`)
}

const depositado = new CuentaBancaria("alan", 150);

let sumar = Number(prompt("ingrese un monto: "))

CuentaBancaria.prototype.extraer=function(monto){
    if(monto<=this.saldoInicial){
        this.saldoInicial-=monto
        // console.log(``)
    }else{
        console.log("saldo insuficiente")
    }
}


depositado.depositar(sumar)
depositado.extraer(500)
depositado.mostrar()

