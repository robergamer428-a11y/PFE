function selectionSortDecrescente(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let maiorIndice = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] > array[maiorIndice]) {
                maiorIndice = j;
            }
        }
        if (maiorIndice !== i) {
            let temporario = array[i];
            array[i] = array[maiorIndice];
            array[maiorIndice] = temporario;
        }
    }
    return array;
}

let salarios = [10000, 6000, 19000, 4000, 3000];
console.log(selectionSortDecrescente(salarios));