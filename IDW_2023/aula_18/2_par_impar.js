// let numero = parseFloat(prompt("Digite um número:"));

// let parOuImpar = (numero % 2 === 0) ? "par" : "ímpar";
// let positivoOuNegativo = (numero >= 0) ? "positivo" : "negativo";

// console.log("O número digitado é " + parOuImpar + " e " + positivoOuNegativo + ".");


let numero = parseFloat(prompt("Digite um número:"));
let texto ='';
if(numero % 2 == 0){
    texto = texto + 'o número é par';
}
else{
    texto = texto + 'o número é impar';
}
if (numero >= 0){
    texto = texto + ' é positivo';
}
else{
    texto = texto + ' é negativo';
}
console.log (texto);