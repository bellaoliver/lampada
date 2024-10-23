let btnAcender = document.querySelector(".acender")
let btnApagar = document.querySelector(".apagar")
let lampada = document.querySelector(".lampada")

function estaQuebrada() {
    return lampada.src.indexOf("quebrada") >= 0; 
}

function ligar() {
    if (!estaQuebrada()) { 
        lampada.src = "./img/ligada.jpg"
    }
}

function desligar() {
    if (!estaQuebrada()) { 
        lampada.src = "./img/desligada.jpg" 
    }
}

function quebrar() {
    lampada.src = "./img/quebrada.jpg"
}

btnAcender.addEventListener("click", ligar)
btnApagar.addEventListener("click", desligar)
lampada.addEventListener("mouseover", ligar)
lampada.addEventListener("mouseleave", desligar)
lampada.addEventListener("dblclick", quebrar)
