function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let menorIndice = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[menorIndice]) {
                menorIndice = j;
            }
        }
        if (menorIndice !== i) {
            let temporario = array[i];
            array[i] = array[menorIndice];
            array[menorIndice] = temporario;
        }
    }
    return array;
}

let temperaturas = [33, 37, 39, 23, 40, 27, 25];
console.log(selectionSort(temperaturas));