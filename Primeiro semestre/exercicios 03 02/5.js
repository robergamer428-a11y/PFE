const prompt = require('prompt-sync');
let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

if (num1 === 0 || num2 === 0) {
  console.log("Um dos números é zero");
} else if (num1 > num2) {
  console.log("O maior número é:", num1);
} else if (num2 > num1) {
  console.log("O maior número é:", num2);
} else {
  console.log("Os números são iguais");
}