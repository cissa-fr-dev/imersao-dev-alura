var numeroSecreto1 = parseInt(Math.random() * 11);
var numeroSecreto2 = parseInt(Math.random() * 11);

var botao1 = document.querySelector('#botao1');
var botao2 = document.querySelector('#botao2');
var resertarPlacar = document.querySelector('#reset');

var tentativas1 = 1;
var tentativas2 = 1;

var placarAtual2 = 0;

var acertou1 = 0;
var acertou2 = 0;

document.querySelector("#placar1").innerHTML = acertou1;
document.querySelector("#placar2").innerHTML = acertou2;

botao1.addEventListener('click', function () {
    var numeroDigitado1 = parseInt(document.querySelector("#numeroDigitado1").value);

    if (numeroSecreto1 == numeroDigitado1) {
        document.querySelector("#resposta1").innerHTML = "Acertou!";
        acertou1++;
        document.querySelector("#placar1").innerHTML = acertou1;
    } else if (numeroDigitado1 > numeroSecreto1) {
        document.querySelector("#resposta1").innerHTML = "O número secreto é menor";
        tentativas1++;
    } else if (numeroDigitado1 < numeroSecreto1) {
        document.querySelector("#resposta1").innerHTML = "O número secreto é maior";
        tentativas1++;
    }
    if (tentativas1 > 3 && numeroDigitado1 != numeroSecreto1) {
        document.querySelector("#resposta1").innerHTML = "Suas tentativas acabaram!";
        document.querySelector("#numeroSorteado1").innerHTML = "O número secreto era o " + numeroSecreto1 + ".";
    }
});

botao2.addEventListener('click', function () {
    var numeroDigitado2 = parseInt(document.querySelector("#numeroDigitado2").value);

    if (numeroSecreto2 == numeroDigitado2) {
        document.querySelector("#resposta2").innerHTML = "Acertou!";
        acertou2++;
        document.querySelector("#placar2").innerHTML = acertou2;
    } else if (numeroDigitado2 > numeroSecreto2) {
        document.querySelector("#resposta2").innerHTML = "O número secreto é menor";
        tentativas2++;
    } else if (numeroDigitado2 < numeroSecreto2) {
        document.querySelector("#resposta2").innerHTML = "O número secreto é maior";
        tentativas2++;
    }
    if (tentativas2 > 3 && numeroDigitado2 != numeroSecreto2) {
        document.querySelector("#resposta2").innerHTML = "Suas tentativas acabaram!";
        document.querySelector("#numeroSorteado2").innerHTML = "O número secreto era o " + numeroSecreto2 + ".";
    }

    setTimeout(function () {
        while (acertou2 != placarAtual2 || tentativas2 > 3) {
            placarAtual2 = acertou2;
            tentativas1 = 1;
            tentativas2 = 1;
            limparCampos();
            resetarNumeroSecreto();
        }
    }, 3000)
});

function limparCampos() {
    document.getElementById("numeroDigitado1").value = "";
    document.querySelector("#resposta1").innerHTML = "";
    document.querySelector("#numeroSorteado1").innerHTML = "";

    document.getElementById("numeroDigitado2").value = "";
    document.querySelector("#resposta2").innerHTML = "";
    document.querySelector("#numeroSorteado2").innerHTML = "";
};

function resetarNumeroSecreto() {
    numeroSecreto1 = parseInt(Math.random() * 11);
    numeroSecreto2 = parseInt(Math.random() * 11);
};

function resetarPlacar() {
    acertou1 = 0;
    acertou2 = 0;

    document.querySelector("#placar1").innerHTML = 0;
    document.querySelector("#placar2").innerHTML = 0;
}

resertarPlacar.addEventListener('click', function () {
    limparCampos();
    resetarNumeroSecreto();
    resetarPlacar();
});