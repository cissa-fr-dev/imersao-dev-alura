const calcularReal = document.getElementById('calcularReal');
const calcularDolar = document.getElementById('calcularDolar');

function converteValor() {
    const valorEmReal = document.getElementById('real').value;
    const valorEmDolar = document.getElementById('dolar').value;
    const resultado = document.getElementById('resultado');

    if (valorEmReal) {
        resultado.textContent = "O valor em dolar é: U$" + parseFloat(valorEmReal / 5.50).toFixed(2).replace('.', ',');
    } if (valorEmDolar) {
        resultado.textContent = "O valor em reais é: R$" + parseFloat(valorEmDolar * 5.50).toFixed(2).replace('.', ',');
    } if (!valorEmReal && !valorEmDolar) {
        resultado.textContent = "Nenhum campo preenchido!";
    }
}

calcularReal.addEventListener('click', converteValor);
calcularDolar.addEventListener('click', converteValor);