function bubbleSortAlunos(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].numero > array[j + 1].numero) {
                let temporario = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temporario;
            }
        }
    }
    return array;
}

let alunos = [
  { numero: 4, nome: 'Ana Alfreda' },
  { numero: 5, nome: 'Alfredo' },
  { numero: 3, nome: 'Malta' },
  { numero: 7, nome: 'Brian' },
  { numero: 2, nome: 'Sueny' }
];

console.log(bubbleSortAlunos(alunos));