function historicoTextos() {
    let pilha = [];

    return {
        
        digitar(palavra) {
            pilha.push(palavra);
        },
        
        desfazer() {
            if (pilha.length === 0) {
                return "Histórico vazio!";
            }
            return pilha.pop();
        },
        
        obterTexto() {
            return pilha.join(" ");
        }
    };
}

let editor = historicoTextos();


editor.digitar("Lucas");
editor.digitar("Silva");
editor.digitar("Miranda");
editor.digitar("Legal");

console.log("Texto atual:", editor.obterTexto());



let palavraRemovida = editor.desfazer();
console.log(`Palavra apagada: "${palavraRemovida}"`);

console.log("Texto final:", editor.obterTexto());
