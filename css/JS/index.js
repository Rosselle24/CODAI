var nome = "Selly Ramos";
var cargo = "CTO - Growdev";
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
      texto1.style.display = "none";
}

function clickNoSobre() {
    console.log("Clicou no Botão Sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";
}

function logaNome() {
    console.log("nome");
}

colocarNoHtml(nome);
colocarNoHtml(cargo);
