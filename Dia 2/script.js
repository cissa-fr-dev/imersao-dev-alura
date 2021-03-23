var primeroValor = parseInt(prompt("Digite o primeiro valor:"));
var segundoValor = parseInt(prompt("Digite o segundo valor:"));
var resultado = 0;

var operacao = prompt("Digite 1 para fazer uma divisão, 2 para multiplicação , 3 para soma e 4 para subtração")

if (operacao == 1) {
    resultado = primeroValor / segundoValor;
    document.write("<h2>" + primeroValor + " / " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 2) {
    resultado = primeroValor * segundoValor;
    document.write("<h2>" + primeroValor + " x " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 3) {
    resultado = primeroValor + segundoValor;
    document.write("<h2>" + primeroValor + " + " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 3) {
    resultado = primeroValor - segundoValor;
    document.write("<h2>" + primeroValor + " - " + segundoValor + " = " + resultado + "</h2>")
} else {
    document.write("<h2>Opção inválida!</h2>")
}
