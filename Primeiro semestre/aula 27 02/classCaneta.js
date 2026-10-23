class Caneta{
    cor = 'amarela';
    marca = 'Faber castel';
    ponta = 'fina';
    qtdTinta = 10;//ml
    tampa = false;

    escrever(){
        this.qtdTinta -= 1
        return 'comecei a escrever';
    }
    sublinhar(valor){
        if(valor > this.qtdTinta){
            return 'quantidade de tinta insuficiente'
        }
        this.qtdTinta -= valor;
        return 'a quantidade restante depois de sublinhar é ' + this.qtdTinta;
    }

    getQtdTinta(){
        return this.qtdTinta;

    }

}
const canetaFina = new Caneta();
canetaFina.escrever();
canetaFina.escrever();
console.log('a quantidade restante de tinta é ' + canetaFina.getQtdTinta());