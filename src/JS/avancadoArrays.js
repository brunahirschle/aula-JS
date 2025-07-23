let nomes = [];


for (i = 1; i <= 4; i++) {
    const nome = prompt("Qual nome voce quer adicionar?")
    nomes.push(nome);
}

console.log(nomes);

const nomeBruna = nomes.filter(function(nome) {
    return nome === "Bruna"
});

console.log(nomeBruna);

const nomeEspecifico = nomes.find (function(nome) {
    return nome[1]
});

console.log(nomeEspecifico);

const nomeMaior = nomes.map (function(nome) {
    return nome.toUpperCase()
});

console.log(nomeMaior);

const nomeMaisTres = nomes.every (function(nome) {
    return nome.length > 3;
});

console.log(nomeMaisTres);

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
            console.log(nomes)
            break
        case 2:
            console.log(nomeBruna)
            break
        case 3:
            console.log(nomeEspecifico)
            break
        case 4:
            console.log(nomeMaior)
            break
        case 5:
            console.log(nomeMaisTres)
            break
        case 6:
            console.log("Saindo do programa")
            break
        default:
            console.log("ação inválida")
    }
} while (op != 6);