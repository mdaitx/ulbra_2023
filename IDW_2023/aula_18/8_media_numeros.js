let numeros = [];
let numero = 0;
let soma = 0;

while (numero >= 0) {
  numero = parseFloat(prompt("Digite um número (digite um número negativo para encerrar):"));
  
  if (numero >= 0) {
    numeros.push(numero);
    soma =+ numero;
  }
}

let media = soma / numeros.length;

console.log("A média dos números digitados é: " + media);