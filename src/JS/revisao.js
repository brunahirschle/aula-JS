let tarefas = ["Comer", "Dormir", "Se exercitar"];

tarefas.push("Lavar a louça");
tarefas.splice(2, 1, "Escovar os dentes");


for (let i = 0; i < tarefas.length; i++) {
    console.log((i + 1) + ": " + tarefas[i]);
}

while (tarefas != "sair") {
    tarefas = prompt("Deseja adicionar, listar, remover ou concluir as atividades?");
    break;
}








