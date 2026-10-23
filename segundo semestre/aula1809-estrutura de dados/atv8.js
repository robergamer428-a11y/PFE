let fila = ["A", "B", "C", "D"];
let pilhaAuxiliar = [];

// Transfere da fila para a pilha
while (fila.length > 0) {
    pilhaAuxiliar.push(fila.shift());
}

// Transfere da pilha de volta para a fila (invertendo a ordem)
while (pilhaAuxiliar.length > 0) {
    fila.push(pilhaAuxiliar.pop());
}

console.log("Fila invertida:", fila);