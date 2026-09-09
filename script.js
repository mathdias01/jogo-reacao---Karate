const telaMenu = document.getElementById("tela-menu");
const telaJogo = document.getElementById("tela-jogo");
const telaResultado = document.getElementById("tela-resultado");

const botoesDificuldade = document.querySelectorAll(".botao-dificuldade")


let dificuldade;


botoesDificuldade.forEach(function(botao) {


    botao.addEventListener("click", function(){
        console.log(botao.dataset.dificuldade);
        dificuldade = botao.dataset.dificuldade;
        telaMenu.classList.add("escondido");
        telaJogo.classList.remove("escondido");
    });

});







