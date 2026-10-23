let nomes = ["Ana", "Carlos", "Daniela", "Eduardo", "Fernanda"];

function removerCliente(fila) {
    if (fila.length === 0) {
        console.log("A fila está vazia!");
        return null;
    }
    return fila.shift();
}

removerCliente(nomes);