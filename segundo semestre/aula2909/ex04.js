function contarNotasMaximas(notas) {
    let contador = 0;

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] === 10) {
            contador++;
        }
    }

    if (contador === 0) {
        console.log("Nenhuma nota 10 foi encontrada na lista.");
    }

    return contador;
}


const turmaA = [7, 8.5, 10, 6, 10, 9.5];
const totalNotas10TurmaA = contarNotasMaximas(turmaA);
console.log(`Quantidade de notas 10: ${totalNotas10TurmaA}`); 


const turmaB = [5, 7, 8, 6.5, 9];
const totalNotas10TurmaB = contarNotasMaximas(turmaB);

console.log(`Quantidade de notas 10: ${totalNotas10TurmaB}`); 
