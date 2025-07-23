var tarefas = ["Dormir"];

function adicionarTarefa(lista, ...tarefasAdicionadas) {
    console.log(`Principal: ${lista}`);
    console.log(`Outras: ${tarefasAdicionadas}`);
    lista.push(...tarefasAdicionadas);
}

adicionarTarefa(tarefas, "Comer", "Se exercitar");
console.log("Tarefas atualizadas: ", tarefas);

function executarOperacao(tarefas, operacao, tarefa) {
    return operacao(tarefas, tarefa)
}

function removerTarefa(lista, tarefa) {
    console.log("removendo tarefa...")
    lista.shift()
    console.log("tarefa removida...")
}

function atualizarTarefa(lista, tarefaAntiga, tarefaNova) {
    console.log("atualizando tarefa...")
    lista.splice()
    console.log("tarefa atualizada...")
}

function concluirTarefa(lista, tarefa) {
    console.log("concluindo tarefa...")
    lista.splice()
    console.log("tarefa concluida...")
}

executarOperacao(tarefas, removerTarefa, "Dormir");
executarOperacao(tarefas, atualizarTarefa, "Comer", "Tomar café");
executarOperacao(tarefas, concluirTarefa, "Estudar");

console.log("Tarefas finais:", tarefas);