function ordenarPorTamanho(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].length > array[j + 1].length) {
                let temporario = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temporario;
            }
        }
    }
    return array;
}

let palavras = ['banana', 'maçã', 'melão', 'melancia', 'abacate'];
console.log(ordenarPorTamanho(palavras));