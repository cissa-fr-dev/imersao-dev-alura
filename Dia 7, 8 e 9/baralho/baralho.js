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

exibeBaralho();

function exibeBaralho() {
    var divBaralho = document.getElementById('form-baralho');
    var carta = "";
    var opcoesTexto = "";

    for (var i = 0; i < cartas.length; i++) {
        opcoesTexto = "";
        for (var atributo in cartas[i].atributos) {
            opcoesTexto += `           
            <div class="opcoes-baralho" name="atributo">
                <p>${atributo}</p>
                <p>${cartas[i].atributos[atributo]}</p>  
            </div>
        `;
        };

        carta += `
            <div id="carta-baralho" class="carta">
                <div>
                    <div class="carta-subtitle">${cartas[i].nome}</div>
                    <div class="imagem-personagem">
                        <img src="${cartas[i].imagem}">
                    </div>
                    <div class="atributos">${opcoesTexto}</div>
                </div>
            </div>
        `;
    };

    divBaralho.innerHTML = carta;
}