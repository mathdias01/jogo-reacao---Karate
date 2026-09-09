const telaMenu = document.getElementById("tela-menu");
const telaJogo = document.getElementById("tela-jogo");
const telaResultado = document.getElementById("tela-resultado");

const botoesDificuldade = document.querySelectorAll(".botao-dificuldade")



botoesDificuldade.forEach(function(botao) {

    console.log("Encontrei um botão!");

    botao.addEventListener("click", function(){
        console.log("CLIQUEI!");
        console.log(botao.dataset);
    });

});


console.log("Teste")





