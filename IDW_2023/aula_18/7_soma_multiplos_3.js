let soma = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0) {
    soma += i;
  }
}

console.log("A soma dos números múltiplos de 3 entre 0 e 100 é: " + soma);