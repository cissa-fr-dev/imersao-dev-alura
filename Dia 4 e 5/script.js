const listaFilmes = [
    {
        nome: "E o vento levou",
        imagem: "https://m.media-amazon.com/images/M/MV5BYjUyZWZkM2UtMzYxYy00ZmQ3LWFmZTQtOGE2YjBkNjA3YWZlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        trailer: `<iframe width="560" height="315" src="https://www.youtube.com/embed/YdAGyMblVDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
        nome: "Titanic",
        imagem: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg",
        trailer: `<iframe width="560" height="315" src="https://www.youtube.com/embed/kVrqfYjkTdQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
        nome: "Vingadores: Ultimato",
        imagem: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        trailer: `<iframe width="560" height="315" src="https://www.youtube.com/embed/g6ng8iy-l0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
        nome: "Shrek",
        imagem: "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
        trailer: `<iframe width="560" height="315" src="https://www.youtube.com/embed/CwXOrWvPBPk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
        nome: "Whiplash: Em Busca da Perfeição",
        imagem: "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
        trailer: `<iframe width="560" height="315" src="https://www.youtube.com/embed/iTgk3WbTErk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
];

const filmes = document.querySelector('#filmes');

for (var i = 0; i < listaFilmes.length; i++) {
    const cardFilme = `
        <div class='card'>
            <div class="img-filme">
                <img class="img" src="${listaFilmes[i].imagem}"/>
            </div>
    
            <div class="detalhes">                 
                <h3>${listaFilmes[i].nome}</h3>                                                           
            </div>
        </div>
    `;
    filmes.innerHTML += cardFilme;
};

var modalAdicionar = document.getElementById('modal');
var modalDetalhes = document.getElementById('modal-detalhes');
var abrirModalDeAdicionarFilme = document.getElementById("abrir-modal");
var fecharModal = document.getElementsByClassName("close")[0];
var fecharModalDetalhes = document.getElementsByClassName("close-detalhes")[0];

abrirModalDeAdicionarFilme.onclick = function () {
    modalAdicionar.style.display = "block";
};

fecharModal.onclick = function () {
    modalAdicionar.style.display = "none";
};

fecharModalDetalhes.onclick = function () {
    modalDetalhes.style.display = "none";
};

// Abre e fechar o modal se clicar fora dele
window.onclick = function (event) {
    if (event.target == modalAdicionar) {
        modalAdicionar.style.display = "none";
    } else if (event.target == modalDetalhes) {
        modalDetalhes.style.display = "none";
    }

    var filmeClicado = document.querySelectorAll("#filmes .card");

    for (var i = 0; i < filmeClicado.length; i++) {
        filmeClicado[i].addEventListener("click", function () {
            modalDetalhes.style.display = "block";
            mostrarModalDeDetalhes(this.innerText)
        })
    }
}

function mostrarModalDeDetalhes(nomeFilmeSelecionado) {
    const detalhes = document.querySelector('#fields-detalhes');

    for (var i = 0; i < listaFilmes.length; i++) {
        if (listaFilmes[i].nome == nomeFilmeSelecionado) {
            const detalheFilme = `
            <div id="detalhe-filme" class='detalhe-filme'>
                <div class="nome-filme">                 
                    <h3 >${listaFilmes[i].nome}</h3>                                                                          
                </div>                                            
                    ${listaFilmes[i].trailer}                                                           
            </div>`;
            detalhes.innerHTML = detalheFilme;
        }
    }
}

function adicionarFilme() {
    var campoNomeFilme = document.querySelector('#nomeFilme');
    var nomeFilme = campoNomeFilme.value;

    var campoImagemFilme = document.querySelector('#imagemFilme');
    var imagemFilme = campoImagemFilme.value;

    var campoTrailerFilme = document.querySelector('#trailerFilme');
    var trailerFilme = campoTrailerFilme.value;

    var filme = { nome: nomeFilme, imagem: imagemFilme, trailer: trailerFilme };

    if (validaFilme(filme) == "ok") {
        campoNomeFilme.value = "";
        campoImagemFilme.value = "";
        campoTrailerFilme.value = "";
        modalAdicionar.style.display = "none";
    }
};

function validaFilme(filme) {
    if (filme.nome == "") {
        alert("É preciso adicionar o nome do filme!");
    } else if (!filme.imagem.endsWith(".jpg")) {
        alert("O link da imagem não está no formato correto!");
    } else if (!filme.trailer.endsWith("</iframe>")) {
        alert("O link do vídeo não está no formato correto!");
    } else {
        adicionarNaListaDeFilmes(filme);
        return ("ok")
    }
};

function adicionarNaListaDeFilmes(filme) {
    listaFilmes.push(filme);
    listarFilmeNaTela(filme);
};

function listarFilmeNaTela(filme) {
    const cardFilme = `
            <div class='card'>
                <div class="img-filme">
                    <img class="img" src="${filme.imagem}"/>
                </div>
        
                <div class="detalhes">                 
                    <h3>${filme.nome}</h3>                                                           
                </div>
            </div>
        `;
    filmes.innerHTML += cardFilme;
};