String.prototype.concatenarPalabra = function(palabra) {
    return `${this} ${palabra}`;
}


let texto = "Hola";
let nuevoTexto = texto.concatenarPalabra("Mundo");

console.log("Texto original:", texto);
console.log("Texto nuevo:", nuevoTexto);
