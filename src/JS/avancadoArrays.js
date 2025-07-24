let nomes = [];


for (i = 1; i < 4; i++) {
    const nome = prompt("Qual nome voce quer adicionar?")
    nomes.push(nome);
}


let op
do {
    op = parseInt(prompt(`Bem-Vindo! Digite a operação desejada:
        1- Adicionar
        2- Filtrar
        3- Buscar
        4- Transformar
        5- Verificar
        6- Sair`))

    switch(op) {
        case 1:
            const novoNome = prompt("Qual novo nome você gostaria de adicionar?");
            nomes.push(novoNome);
            console.log(nomes);
            break
        case 2:
            const letra = prompt("Gostaria de filtrar os nomes por qual inicial?")
            const nomeCom = nomes.filter(function(nome) {
                return nome.startsWith(letra)
            });
            console.log(`O(s) nome(s) ${nomeCom} começa(m) com a letra ${letra}`);
            break
        case 3:
            const procurado = prompt("Qual nome você procura?")
            const nomeEspecifico = nomes.find (function(nome) {
                return nome === procurado
            });
            console.log(nomeEspecifico);
            break
        case 4:
            const nomeMaior = nomes.map (function(nome) {
                return nome.toUpperCase()
            });
            console.log(nomeMaior);
            break
        case 5:
            const nomeMaisTres = nomes.every (function(nome) {
                return nome.length > 3;
            });
            console.log(nomeMaisTres);
            break
        case 6:
            console.log("Saindo do programa");
            break
        default:
            console.log("ação inválida");
    }
} while (op != 6);