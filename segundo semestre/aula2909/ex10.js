function bubbleSortCarros(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].anoFabricacao > array[j + 1].anoFabricacao) {
                let temporario = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temporario;
            }
        }
    }
    return array;
}

let carros = [
    { modelo: 'Civic', anoFabricacao: 2020 },
    { modelo: 'Fusca', anoFabricacao: 1975 },
    { modelo: 'Corolla', anoFabricacao: 2015 },
    { modelo: 'Uno', anoFabricacao: 1998 }
];

console.log(bubbleSortCarros(carros));