var jogadores = [
    { nome: "Cecília", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 },
    { nome: "Eva", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }
];

jogadores[0].pontos = calculaPontos(jogadores[0]);

function calculaPontos(jogadores) {
    var pontos = jogadores.vitorias * 1 + jogadores.empates * 0.5;
    return pontos;
}

exibirJogadoresNaTela(jogadores);

function exibirJogadoresNaTela(jogadores) {
    var html = "";
    for (var i = 0; i < jogadores.length; i++) {
        html += `<tr>
           <td> ${jogadores[i].nome} </td>
           <td> ${jogadores[i].vitorias} </td>
           <td>${jogadores[i].empates}</td>
           <td>${jogadores[i].derrotas}</td>
           <td>${jogadores[i].pontos}</td>             
           <td><button class="botao-vitoria" onClick="adicionarVitoria(${i})">Vitória</button></td>   
           <td><button class="botao-derrota" onClick="adicionarDerrota(${i})">Derrota</button></td>
         </tr>`;
    }
    html += `<td class="empate" colspan="7"><button class="botao-empate" onClick="adicionarEmpate()">Empate</button></td>`;
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = html;
}

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadoresNaTela(jogadores);
}

function adicionarEmpate() {
    for (var i = 0; i < jogadores.length; i++) {
        jogadores[i].empates++;
        jogadores[i].pontos = calculaPontos(jogadores[i])
    }
    exibirJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibirJogadoresNaTela(jogadores);
}