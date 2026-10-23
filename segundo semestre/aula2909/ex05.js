function buscarTelefone(contatos, nome) {
    for (let i = 0; i < contatos.length; i++) {
        if (contatos[i].nome === nome) {
            return contatos[i].telefone;
        }
    }
    return "Contato não encontrado";
}

let contatos = [
  { nome: 'Fulano', telefone: '18982828989' },
  { nome: 'Ciclano', telefone: '11971717171' }
];

console.log(buscarTelefone(contatos, 'Fulano'));
console.log(buscarTelefone(contatos, 'Beltrano'));