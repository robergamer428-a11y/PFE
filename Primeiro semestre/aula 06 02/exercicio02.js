const prompt = require('prompt-sync')();
let idade = Number(prompt("digite sua idade: "));
if (idade >= 16) {
    console.log("tem idade suficiente para pegar livros emprestado");
    }
else {
    console.log("nao pode pegar livros, pois nao tem a idade adequada")
}
 if (idade >= 18){
    console.log("pode pegar livros emprestados, pois é maior de idade")
 }
 