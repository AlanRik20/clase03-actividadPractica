const originalToUpperCase = String.prototype.toUpperCase;

String.prototype.toUpperCase = function() {
  return "ESTO ESTÁ PROHIBIDO";
};

console.log("hola".toUpperCase()); 