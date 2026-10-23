<<<<<<< HEAD
class Tarefa {
titulo = 'matematica';
descricao = 'atividae2';
concluida = false;

constructor(titulo, descricao) {
this.titulo = titulo;
this.descricao = descricao;
}

concluir() {
this.concluida = true;
}

reabrir() {
this.concluida = false;
}
}

class ListaTarefas {
tarefas = [];

adicionar(tarefa) {
this.tarefas.push(tarefa);
}

removerPorTitulo(titulo) {
this.tarefas = this.tarefas.filter(t => t.titulo !== titulo);
}

listar(concluidas = null) {
if (concluidas === null) {
return this.tarefas;
}
return this.tarefas.filter(t => t.concluida === concluidas);
}
}

// Criando lista
const lista = new ListaTarefas();

// Criando 3 tarefas
const t1 = new Tarefa('Estudar Ingles', 'Revisar conteudo');
const t2 = new Tarefa('Treinar', 'caminhada');
const t3 = new Tarefa('Ler', 'Ler 20 páginas');

// Adicionando
lista.adicionar(t1);
lista.adicionar(t2);
lista.adicionar(t3);

// Concluir 1
t1.concluir();

// Remover 1
lista.removerPorTitulo('Treinar');

// Listar todas
console.log('Todas:');
console.log(lista.listar());

// Listar concluídas
console.log('Concluídas:');
console.log(lista.listar(true));

// Listar pendentes
console.log('Pendentes:');
=======
class Tarefa {
titulo = 'matematica';
descricao = 'atividae2';
concluida = false;

constructor(titulo, descricao) {
this.titulo = titulo;
this.descricao = descricao;
}

concluir() {
this.concluida = true;
}

reabrir() {
this.concluida = false;
}
}

class ListaTarefas {
tarefas = [];

adicionar(tarefa) {
this.tarefas.push(tarefa);
}

removerPorTitulo(titulo) {
this.tarefas = this.tarefas.filter(t => t.titulo !== titulo);
}

listar(concluidas = null) {
if (concluidas === null) {
return this.tarefas;
}
return this.tarefas.filter(t => t.concluida === concluidas);
}
}

// Criando lista
const lista = new ListaTarefas();

// Criando 3 tarefas
const t1 = new Tarefa('Estudar Ingles', 'Revisar conteudo');
const t2 = new Tarefa('Treinar', 'caminhada');
const t3 = new Tarefa('Ler', 'Ler 20 páginas');

// Adicionando
lista.adicionar(t1);
lista.adicionar(t2);
lista.adicionar(t3);

// Concluir 1
t1.concluir();

// Remover 1
lista.removerPorTitulo('Treinar');

// Listar todas
console.log('Todas:');
console.log(lista.listar());

// Listar concluídas
console.log('Concluídas:');
console.log(lista.listar(true));

// Listar pendentes
console.log('Pendentes:');
>>>>>>> 84bf64b8d707dd46120b165a1fdddcd40d915840
console.log(lista.listar(false));