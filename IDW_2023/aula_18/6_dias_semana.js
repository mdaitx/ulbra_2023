let numero = parseInt(prompt("Digite um número de 1 a 7 para representar um dia da semana:"));

let diaSemana;

switch (numero) {
  case 1:
    diaSemana = "domingo";
    break;
  case 2:
    diaSemana = "segunda-feira";
    break;
  case 3:
    diaSemana = "terça-feira";
    break;
  case 4:
    diaSemana = "quarta-feira";
    break;
  case 5:
    diaSemana = "quinta-feira";
    break;
  case 6:
    diaSemana = "sexta-feira";
    break;
  case 7:
    diaSemana = "sábado";
    break;
  default:
    diaSemana = "número inválido";
    break;
}

console.log("O número " + numero + " representa " + diaSemana + ".");