var pokemon1 = "bulbasaur";
var pokemon2 = "meowth";
var pokemon3 = "charmander"

var feedback1 = document.querySelector("#check1")
var feedback2 = document.querySelector("#check2")
var feedback3 = document.querySelector("#check3")

feedback1.addEventListener('click', function () {
    var name = document.querySelector("#poke1").value.toLowerCase()
    if (name == "bulbasaur") {
        document.querySelector("#feedback1").innerHTML = "Você acertou!";
    } else {
        document.querySelector("#feedback1").innerHTML = "Você errou!";
    }
});

feedback2.addEventListener('click', function () {
    var name = document.querySelector("#poke2").value.toLowerCase()
    if (name == "meowth") {
        document.querySelector("#feedback2").innerHTML = "Você acertou!";
    } else {
        document.querySelector("#feedback2").innerHTML = "Você errou!";
    }
});

feedback3.addEventListener('click', function () {
    var name = document.querySelector("#poke3").value.toLowerCase()
    if (name == "charmander") {
        document.querySelector("#feedback3").innerHTML = "Você acertou!";
    } else {
        document.querySelector("#feedback3").innerHTML = "Você errou!";
    }
});