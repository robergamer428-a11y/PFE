const prompt = require('prompt-sync')();

let nota = Number(prompt('Digite sua nota: '));
let notaDuasAtividades = nota / 2;
console.log("Divisão: " + notaDuasAtividades);

notaDuasAtividades = notaDuasAtividades ** 2;
console.log("Exponenciação: " + notaDuasAtividades);

