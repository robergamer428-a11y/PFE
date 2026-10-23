function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temporario = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temporario;
            }
        }
    }
    return array;
}

let idades = [20, 17, 18, 19, 16, 11, 14, 13, 12, 15, 10];

console.log("Antes da ordenação:", idades);
console.log("Depois da ordenação:", bubbleSort(idades));    