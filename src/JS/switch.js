let num = Number(prompt("Digite a sua idade: "));
let registro = prompt("Qual situação de registro? registrado ou não registrado. ")

switch (registro) {
    case 'registrado':
        if (num >= 18) {
            alert("Seja Bem-vindo! Acesso Completo!");
        }
        else if (num < 18) {
            alert("Acesso Limitado!");
        }
        break;
    case 'não registrado':
        alert("Retorne e complete seu registro.");
        break;
    default:
        alert("Operação Inválida")
}