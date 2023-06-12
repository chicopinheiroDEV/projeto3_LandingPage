var Direita = document.getElementById("setaDireita")
var Leonardo = document.getElementById("leonardo")
var Samantha = document.getElementById("samantha")
var Bruna = document.getElementById("bruna")
var Esquerda = document.getElementById("setaEsquerda")

function rolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    Direita.style = "display:none"
    Esquerda.style = "display:flex"
}
  
function rolarParaEsquerda() {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    Direita.style = "display:flex"
    Esquerda.style = "display:none"
}