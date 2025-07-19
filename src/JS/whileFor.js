let nomes;

while (nomes != "sair") {
    nomes = prompt("Insira uma sequência de nomes: ");
    break;
}

for (let i = 0; i < nomes.length; i++) {
    console.log((i + 1) + ": " + nomes[i]);
}

for (let nome of nomes) {
    alert("Bem-vindo(a) " + nome);
}