let lista = ['arroz', 'feijão', 'macarrão'];

lista.push('carne');
lista.splice(0, 1, 'bifum');

for (let item of lista) {
    console.log(item);
} 

