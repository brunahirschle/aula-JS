let alunos = {
    nome: '',
    notas: [],
    media: 0,

    adicionarNota: function(nome, nota, notas) {
        alunos.nome = nome;
        notas.push(nota)
    },

    calcularMedia: function(notas) { 
        let soma = notas.reduce((acumulator, valorAtual) => {return acumulator + valorAtual});
        return soma /notas.length;
        }
}



alunos.adicionarNota('Bruna', 10, alunos.notas);
alunos.adicionarNota('Bruna', 9, alunos.notas);

alunos.media =alunos.calcularMedia(alunos.notas);

console.log(alunos.nome);
console.log(alunos.notas);
console.log(alunos.media);