aluno = {
    nome: 'Bruna',
    idade: 25,
    notas: [9.5, 10, 8],

    calcularMedia: function(notas) { 
        let soma = notas.reduce((acumulator, valorAtual) => {return acumulator + valorAtual});
        return soma /notas.length;
        }

}


        console.log(aluno.nome)
        console.log(aluno.idade)

        aluno.notas = [...aluno.notas, 10, 9]
        console.log(aluno.notas)

        aluno.media =aluno.calcularMedia(aluno.notas);
        console.log(aluno.media)
        


        function verificarSituacao(media) {
            if (media >= 7) {
                console.log('O aluno está aprovado')
            } else {
                console.log('O aluno está reprovado')
            }
        }

        verificarSituacao(aluno.media)
