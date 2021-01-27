var nome = "Rosselle Ramos";
var cargo = "Desenvolvedora";
var nomeHtml = document.getElementById("nome-no-html");
var cargoHtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarNoHtml(nome) {
    nomeHtml.innerHTML = nome;
}

function colocarNoHtml(cargo) {
    cargoHtml.innerHTML = cargo;
}


function clickNoProjetos() {
      console.log("Clicou no Botão Projetos");
      texto2.style.display = "block";
}

function logaNome() {
    console.log("nome");
}

colocarNoHtml(nome);
colocarNoHtml(cargo);
