let filaTarefas = ["Enviar e-mail", "Gerar relatório", "Fazer backup"];

function proximaTarefa(fila) {
    if (fila.length === 0) return "Fila vazia";
    return fila[0];
}

console.log("Próxima tarefa:", proximaTarefa(filaTarefas));