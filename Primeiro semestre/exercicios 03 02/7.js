const prompt = r
equire('prompt-sync')
let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));
let operador = prompt("Digite a operação (+ - * /):");

let resultado;

switch (operador) {
  case "+":
    resultado = num1 + num2;
    break;
  case "-":
    resultado = num1 - num2;
    break;
  case "*":
    resultado = num1 * num2;
    break;
  case "/":
    resultado = num2 !== 0 ? num1 / num2 : "Divisão por zero";
    break;
  default:
    resultado = "Operação inválida";
}