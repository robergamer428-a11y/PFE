function buscarProdutoBarato(produtos) {
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].preco < 20) {
            return produtos[i].nomeProduto;
        }
    }
    return null;
}

let produtos = [
    { nomeProduto: 'Carne', preco: 45.00 },
    { nomeProduto: 'Leite', preco: 5.50 },
    { nomeProduto: 'Pão', preco: 12.00 }
];

console.log(buscarProdutoBarato(produtos));