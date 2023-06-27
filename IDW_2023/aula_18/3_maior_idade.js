let nome = prompt("Digite o seu nome:");
let idade = parseInt(prompt("Digite a sua idade:"));

if (idade >= 18) {
  console.log(nome + ", você tem " + idade + " anos, é maior de idade.");
} else {
  console.log(nome + ", você tem " + idade + " anos, não é maior de idade.");
}