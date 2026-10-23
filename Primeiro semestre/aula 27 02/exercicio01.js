<<<<<<< HEAD
class Produto {
    nome = 'tenis';
    preco = 0;
    estoque = 0;

    constructor(nome, preco, estoque) {
        if (preco < 0 || estoque < 0) {
            console.log('Preço e estoque não podem ser negativos');
            return;
        }

        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    aplicarDesconto(percentual) {
        this.preco -= this.preco * (percentual / 100);
    }

    valorEmEstoque() {
        return this.preco * this.estoque;
    }
}

const produto1 = new Produto('computador', 3000, 5);
const produto2 = new Produto('teclado', 100, 10);

produto1.aplicarDesconto(10);

console.log('Valor em estoque produto 1: ' + produto1.valorEmEstoque());
console.log('Valor em estoque produto 2: ' + produto2.valorEmEstoque());

if (produto1.valorEmEstoque() > produto2.valorEmEstoque()) {
    console.log('Produto 1 tem maior valor em estoque');
} else {
    console.log('Produto 2 tem maior valor em estoque');
=======
class Produto {
    nome = 'tenis';
    preco = 0;
    estoque = 0;

    constructor(nome, preco, estoque) {
        if (preco < 0 || estoque < 0) {
            console.log('Preço e estoque não podem ser negativos');
            return;
        }

        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    aplicarDesconto(percentual) {
        this.preco -= this.preco * (percentual / 100);
    }

    valorEmEstoque() {
        return this.preco * this.estoque;
    }
}

const produto1 = new Produto('computador', 3000, 5);
const produto2 = new Produto('teclado', 100, 10);

produto1.aplicarDesconto(10);

console.log('Valor em estoque produto 1: ' + produto1.valorEmEstoque());
console.log('Valor em estoque produto 2: ' + produto2.valorEmEstoque());

if (produto1.valorEmEstoque() > produto2.valorEmEstoque()) {
    console.log('Produto 1 tem maior valor em estoque');
} else {
    console.log('Produto 2 tem maior valor em estoque');
>>>>>>> 84bf64b8d707dd46120b165a1fdddcd40d915840
}