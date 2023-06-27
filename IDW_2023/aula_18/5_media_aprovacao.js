let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

console.log("A média das notas é: " + media);

if (media >= 6) {
  console.log("O aluno está aprovado.");
} else {
  console.log("O aluno está reprovado.");
}
