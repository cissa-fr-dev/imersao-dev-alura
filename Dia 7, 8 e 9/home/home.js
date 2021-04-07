var cartas = [
    {
        nome: "Rúbeo Hagrid",
        imagem: "https://i.pinimg.com/originals/a1/af/7f/a1af7fd4d10baa9ae99fbfbcc5c3f8ee.gif",
        atributos: {
            Ataque: 50,
            Defesa: 40,
            ArtesDasTrevas: 10,
            Poções: 55,
        },
    },
    {
        nome: "Harry Potter",
        imagem: "https://i.pinimg.com/originals/4e/b7/13/4eb7135b66e55011c9ec0af9bdd8578a.gif",
        atributos: {
            Ataque: 90,
            Defesa: 42,
            ArtesDasTrevas: 30,
            Poções: 11,
        },
    },
    {
        nome: "Rony Weasley",
        imagem: "http://pa1.narvii.com/6283/3e56489981c7c9b6e3c195019c2713b29be0155d_00.gif",
        atributos: {
            Ataque: 72,
            Defesa: 10,
            ArtesDasTrevas: 5,
            Poções: 1,
        },
    },
    {
        nome: "Hermione Granger",
        imagem: "https://i.pinimg.com/originals/b2/81/ba/b281ba4a3f9e990366c0447b30f5fdef.gif",
        atributos: {
            Ataque: 91,
            Defesa: 84,
            ArtesDasTrevas: 20,
            Poções: 70,
        },
    },
    {
        nome: "Albus Dumbledore",
        imagem: "https://media.tenor.co/images/1826e883ae41d7f3f6600ed4d45a97c5/raw",
        atributos: {
            Ataque: 91,
            Defesa: 88,
            ArtesDasTrevas: 62,
            Poções: 50,
        },
    },
    {
        nome: "Luna",
        imagem: "http://smi-scamander.weebly.com/uploads/1/5/3/9/15392590/5822745_orig.gif",
        atributos: {
            Ataque: 10,
            Defesa: 60,
            ArtesDasTrevas: 5,
            Poções: 61,
        },
    },
    {
        nome: "Draco Malfoy",
        imagem: "https://s14.favim.com/orig/170214/draco-malfoy-gif-harry-potter-hogwarts-Favim.com-5064694.gif",
        atributos: {
            Ataque: 63,
            Defesa: 42,
            ArtesDasTrevas: 68,
            Poções: 14,
        },
    },
    {
        nome: "Lord Voldemort",
        imagem: "https://thumbs.gfycat.com/MellowGraveAfricanhornbill-small.gif",
        atributos: {
            Ataque: 92,
            Defesa: 86,
            ArtesDasTrevas: 96,
            Poções: 78,
        },
    },
    {
        nome: "Dobby",
        imagem: "https://media.tenor.com/images/07d8e52aec18188c59f0fa7769d9dcca/tenor.gif",
        atributos: {
            Ataque: 84,
            Defesa: 80,
            ArtesDasTrevas: 81,
            Poções: 25,
        },
    },
    {
        nome: "Bellatrix Lestrange",
        imagem: "https://i.pinimg.com/originals/47/82/75/478275ce9cec730eca4c980be9934792.gif",
        atributos: {
            Ataque: 76,
            Defesa: 69,
            ArtesDasTrevas: 75,
            Poções: 15,
        },
    },
    {
        nome: "Neville Longbottom",
        imagem: "https://i.pinimg.com/originals/95/e4/85/95e4857a5abda5096379d6844b692afd.gif",
        atributos: {
            Ataque: 51,
            Defesa: 45,
            ArtesDasTrevas: 3,
            Poções: 10,
        },
    },
    {
        nome: "Sirius Black",
        imagem: "https://i.pinimg.com/originals/bc/27/68/bc2768293f6c085a465c6318072a90d6.gif",
        atributos: {
            Ataque: 73,
            Defesa: 82,
            ArtesDasTrevas: 78,
            Poções: 0,
        },
    },
    {
        nome: "Minerva McGonagall",
        imagem: "http://68.media.tumblr.com/d244d88f8e5664387969fe0192fd5303/tumblr_ow9m8qYFZO1rv5j9yo1_250.gif",
        atributos: {
            Ataque: 60,
            Defesa: 79,
            ArtesDasTrevas: 74,
            Poções: 86,
        },
    },
    {
        nome: "Remo Lupin",
        imagem: "https://data.whicdn.com/images/188146363/original.gif",
        atributos: {
            Ataque: 86,
            Defesa: 90,
            ArtesDasTrevas: 90,
            Poções: 72,
        },
    },
    {
        nome: "Fred Weasley",
        imagem: "https://64.media.tumblr.com/eee7e19ac00ff2db0d957101925d1766/tumblr_ojkh9kPxGt1v4tq27o1_250.gif",
        atributos: {
            Ataque: 65,
            Defesa: 69,
            ArtesDasTrevas: 58,
            Poções: 71,
        },
    },
    {
        nome: "George Weasley",
        imagem: "https://i.pinimg.com/originals/1a/f3/d8/1af3d87caf3840217a0786db7b1b81bd.gif",
        atributos: {
            Ataque: 65,
            Defesa: 58,
            ArtesDasTrevas: 59,
            Poções: 71,
        },
    },
];

var pontosJogador = 0;
var pontosMaquina = 0;
var rodada = 0;

var baralhoJogador = [];
var baralhoMaquina = [];

atualizaPlacar();
dividirCartasJogadorMaquina();

var divModal = document.getElementById('modal');
var fecharModal = document.getElementsByClassName("close")[0];

window.onclick = function (event) {
    if (event.target == divModal) {
        divModal.style.display = "none";
    };
};

fecharModal.onclick = function () {
    divModal.style.display = "none";
};

function reiniciaPlacar() {
    zerarPlacar();
    mostraCartasFechadas();

    document.getElementById('btnProximaRodada').disabled = true;
    document.getElementById('btnSortear').disabled = false;

    baralhoJogador = [];
    baralhoMaquina = [];

    dividirCartasJogadorMaquina();
}

function dividirCartasJogadorMaquina() {
    var contadorJogador = 0;
    var contadorMaquina = 0;
    for (var i = 0; i < cartas.length; i++) {
        if (i % 2 == 0) {
            baralhoJogador[contadorJogador] = cartas[i];
            contadorJogador++;
        } else {
            baralhoMaquina[contadorMaquina] = cartas[i];
            contadorMaquina++;
        };
    };
    exibeQuantidadeDeCartas();
};

function atualizaQuantidadeCartas(baralhoCapeaoDaPartida, cartaPerdedorDaPartida, baralhoPerdedorDaPartida) {
    baralhoCapeaoDaPartida.push(cartaPerdedorDaPartida);

    var index = baralhoPerdedorDaPartida.indexOf(cartaPerdedorDaPartida);
    baralhoPerdedorDaPartida.splice(index, 1);

    exibeQuantidadeDeCartas();
};

function exibeQuantidadeDeCartas() {
    var divQuantidadeCartasJogador = document.getElementById('quantidade-cartas-jogador');
    var htmlJogador = `${baralhoJogador.length} cartas restantes`;

    var divQuantidadeCartasMaquina = document.getElementById('quantidade-cartas-maquina');
    var htmlMaquina = `${baralhoMaquina.length} cartas restantes`;

    divQuantidadeCartasJogador.innerHTML = htmlJogador;
    divQuantidadeCartasMaquina.innerHTML = htmlMaquina;
};

function atualizaPlacar() {
    var divPlacar = document.getElementById('placar');
    var html = `${pontosJogador} x ${pontosMaquina}`;

    divPlacar.innerHTML = html;
};

function zerarPlacar() {
    pontosJogador = 0;
    pontosMaquina = 0;

    atualizaPlacar();
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * baralhoMaquina.length);
    cartaMaquina = baralhoMaquina[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * baralhoJogador.length);
    cartaJogador = baralhoJogador[numeroCartaJogador];

    if (rodada % 2 === 0) {
        document.getElementById('btnSortear').disabled = true;
        exibeCartaJogador(cartaJogador.atributos[numeroCartaJogador]);
    }
    else {
        escolherCartaMaquina();
    };
};

function escolherCartaMaquina() {
    var atributoSelecionado = "";
    var atributoAtual = 0;
    var vezMaquina = true;

    for (atributo in cartaMaquina.atributos) {
        if (atributoAtual < cartaMaquina.atributos[atributo]) {
            atributoAtual = cartaMaquina.atributos[atributo]
            atributoSelecionado = atributo;
        }
    }
    exibeCartaMaquina(atributoSelecionado, vezMaquina);
    setTimeout(
        exibeCartaJogador(atributoSelecionado)
        , 10000)
    exibeResultadoDaRodada(atributoSelecionado);
}

function exibeResultadoDaRodada(atributoSelecionado) {
    var divResultado = document.getElementById("resultado");

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        pontosJogador++;
        htmlResultado = '<p class="resultado-final">Jogador venceu!</p>';
        atualizaQuantidadeCartas(baralhoJogador, cartaMaquina, baralhoMaquina);
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        pontosMaquina++;
        htmlResultado = '<p class="resultado-final">Máquina venceu!</p>';
        atualizaQuantidadeCartas(baralhoMaquina, cartaJogador, baralhoJogador);
    } else {
        htmlResultado = '<p class="resultado-final">Empatou!</p>';
    };

    divResultado.innerHTML = htmlResultado;
    atualizaPlacar();
}

function jogar(atributoSelecionado) {
    marcaAtributoSelecionadoJogador(atributoSelecionado);
    exibeResultadoDaRodada(atributoSelecionado);
    exibeCartaMaquina(atributoSelecionado);
    verificaSeTemVencedor();
};

function verificaSeTemVencedor() {
    if (baralhoJogador.length == 0 || baralhoMaquina.length == 0) {
        if (pontosJogador > pontosMaquina) {
            exibeFimDaPartida("Jogador", pontosJogador);
        } else if (pontosJogador < pontosMaquina) {
            exibeFimDaPartida("Máquina", pontosMaquina);
        }
    } else {
        document.getElementById('btnProximaRodada').disabled = false;
    };
};

function exibeFimDaPartida(vencedor, pontosVencedor) {
    divModal.style.display = "block";

    var divModalTitulo = document.getElementById('modal-title');
    var htmlTituto = `
        <h2>${vencedor} Venceu!</h2>        
    `;
    divModalTitulo.innerHTML = htmlTituto;

    var divModalPontuacao = document.getElementById('pontuacao');
    var htmlPontuacao = `
        <h2>${pontosVencedor}</h2>
        <h3>Pontos</h3>
    `;
    divModalPontuacao.innerHTML = htmlPontuacao;

    reiniciaPlacar();
};

function exibeCartaJogador(atributoSelecionado) {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.background = "#cfa871";

    var divInfoJogador = document.getElementById("info-jogador");
    divCartaJogador.style.transition = "0.5s";

    var corAtributo = "";
    var opcoesTexto = "";
    var classe = "";

    if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        corAtributo = `background: #dc4b4b; border: 1px solid #2f0505;`;
    } else if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        corAtributo = `background: #549c57; border: 1px solid #083e0a;`;
    } else {
        corAtributo = `background: #ca9f63; border: 1px solid #805923;`;
    }

    if (rodada % 2 == 0) {
        for (var atributo in cartaJogador.atributos) {
            if (atributoSelecionado == atributo) {
                opcoesTexto += `
                        <div style="${corAtributo}" class="opcoes" value="${atributo}" name="atributo">
                            <p>${atributo}</p>
                            <p>${cartaJogador.atributos[atributo]}</p>  
                        </div>
                    `;
            } else {
                opcoesTexto += `
                    <div class="opcoes" value="${atributo}" name="atributo" onclick="jogar('${atributo}')">
                        <p>${atributo}</p>
                        <p>${cartaJogador.atributos[atributo]}</p>  
                    </div>
                `;
            };
        };
    } else {
        for (var atributo in cartaJogador.atributos) {
            if (atributoSelecionado == atributo) {
                opcoesTexto += `
                    <div style="${corAtributo}" class="opcoes-baralho" value="${atributo}" name="atributo">
                        <p>${atributo}</p>
                        <p>${cartaJogador.atributos[atributo]}</p>  
                    </div>
                `;
            } else {
                opcoesTexto += `
                <div class="opcoes-baralho" value="${atributo}" name="atributo">
                    <p>${atributo}</p>
                    <p>${cartaJogador.atributos[atributo]}</p>  
                </div>
            `};
        };
    }

    var carta = `
        <div>
            <div class="carta-subtitle">${cartaJogador.nome}</div>
            <div class="imagem-personagem">
                <img src="${cartaJogador.imagem}">
            </div>
            <div class="atributos">${opcoesTexto}</div>
        </div>        
    `;

    if (rodada % 2 == 0) {
        divInfoJogador.innerHTML = `
            <h4 class="info" id="info-jogador">
                Vez do jogador!
            </h4>
        `;

        exibeQuantidadeDeCartas();
    };

    divCartaJogador.innerHTML = carta;
};

function exibeCartaMaquina(atributoSelecionado) {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.background = "#cfa871";

    var divInfoMaquina = document.getElementById("info-maquina");
    divCartaMaquina.style.transition = "0.5s";

    var opcoesTexto = "";
    var corAtributo = "";

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        corAtributo = `style="background: #dc4b4b; border: 1px solid #2f0505;"`;
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        corAtributo = `style="background: #549c57; border: 1px solid #083e0a;"`;
    } else {
        corAtributo = `style="background: #ca9f63; border: 1px solid #805923;"`;
    }

    for (var atributo in cartaMaquina.atributos) {
        if (atributoSelecionado == atributo) {
            opcoesTexto += `
                <div ${corAtributo} class="opcoes-maquina" value="${atributo}">
                    <p>${atributo}</p>
                    <p>${cartaMaquina.atributos[atributo]}</p>  
                </div>
            `;
        } else {
            opcoesTexto += `
            <div class="opcoes-maquina" value="${atributo}">
                <p>${atributo}</p>
                <p>${cartaMaquina.atributos[atributo]}</p>  
            </div>
        `;
        };
    };

    var carta = `
        <div>
            <div class="carta-subtitle">${cartaMaquina.nome}</div>
            <div class="imagem-personagem">
                <img src="${cartaMaquina.imagem}">
            </div>
            <div class="atributos">
                ${opcoesTexto}
            </div>
        </div>       
    `;

    if (rodada % 2 != 0) {
        divInfoMaquina.innerHTML = `
            <h4 class="info" id="info-maquina">
                Vez da máquina!
            </h4>
        `;

        exibeQuantidadeDeCartas();
    };

    divCartaMaquina.innerHTML = carta;
};

function marcaAtributoSelecionadoJogador(atributoSelecionado) {
    var divCartaJogador = document.getElementById("carta-jogador");
    var opcoesTexto = "";
    var corAtributo = "";

    if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        corAtributo = `style="background: #dc4b4b; border: 1px solid #2f0505;"`;
    } else if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        corAtributo = `style="background: #549c57; border: 1px solid #083e0a;"`;
    } else {
        corAtributo = `style="background:   #ca9f63; border: 1px solid #805923;"`;
    }

    for (var atributo in cartaJogador.atributos) {
        if (atributoSelecionado == atributo) {
            opcoesTexto += `
                <div ${corAtributo} class="opcoes-baralho" value="${atributo}" name="atributo">
                    <p>${atributo}</p>
                    <p>${cartaJogador.atributos[atributo]}</p>  
                </div>
            `;
        } else {
            opcoesTexto += `
            <div class="opcoes-baralho" value="${atributo}" name="atributo">
                <p>${atributo}</p>
                <p>${cartaJogador.atributos[atributo]}</p>  
            </div>
        `;
        }
    };

    var carta = `
        <div>
            <div class="carta-subtitle">${cartaJogador.nome}</div>
            <div class="imagem-personagem">
                <img src="${cartaJogador.imagem}">
            </div>
            <div class="atributos">${opcoesTexto}</div>
        </div>
    `;

    divCartaJogador.innerHTML = carta;
}

function proximaRodada() {
    rodada++;
    exibeQuantidadeDeCartas();
    mostraCartasFechadas();
    if (baralhoMaquina == 0 || baralhoJogador == 0) {
        verificaSeTemVencedor();
    } else if (rodada % 2 === 0) {
        document.getElementById('btnSortear').disabled = false;
        sortearCarta();

        var divResultado = document.getElementById('resultado');
        divResultado.innerHTML = "";

        document.getElementById('btnProximaRodada').disabled = true;
    } else {
        document.getElementById('btnSortear').disabled = true;
        sortearCarta();
    };
};

function mostraCartasFechadas() {
    var divCartas = document.getElementById('cartas');
    divCartas.innerHTML = `
        <div id="jogador">
            <div id="carta-jogador" class="carta"></div>
            <h4 class="info" id="info-jogador"></h4>
            <div class="quantidade-cartas" id="quantidade-cartas-jogador"></div>
        </div>       
        <div class="placar-centro">
            <div id="placar">${pontosJogador} x ${pontosMaquina}</div>
            <div id="resultado"></div>
        </div>
        <div id="maquina">
            <div id="carta-maquina" class="carta"></div>
            <h4 class="info" id="info-maquina"></h4>
            <div class="quantidade-cartas" id="quantidade-cartas-maquina"></div>
        </div>        
    `;
}