function buscarIndice(array, numero) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === numero) {
            return i;
        }
    }
    return -1;
}

// Exemplos de teste:
console.log(buscarIndice([10, 25, 30, 45, 50], 30)); // Retorna 2
console.log(buscarIndice([10, 25, 30, 45, 50], 99)); // Retorna -1