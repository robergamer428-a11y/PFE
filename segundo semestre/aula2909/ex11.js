function bubbleSortComContador(array) {
    let trocas = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temporario = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temporario;
                trocas++;
            }
        }
    }
    console.log("Array ordenado:", array);
    console.log("Total de trocas efetuadas:", trocas);
    return array;
}

let numeros = [64, 34, 25, 12, 22, 11, 90];
bubbleSortComContador(numeros);