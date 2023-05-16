function GerarTabuada() {
    let cont = 1 
    let nr = Number(document.getElementById("nr").value)
    document.getElementById("resultado").innerHTML = ` Tabuada do ${nr} <br><br> `
    while (cont <= 10) {      
        res = cont * nr
        document.getElementById("resultado").innerHTML += ` ${nr} x ${cont} = ${res} <br>`
        cont++
    }    
}











/*
var computador = parseInt(Math.random() * 100) + 1
var nrTentativas = 0
alert (computador)

function Adivinhar(){
    var jogador = prompt("Qual número você acha que é?")
    nrTentativas++
    if (computador == jogador) {
        document.getElementById("resultado").innerHTML += 
            `<br><b>PARABÉNS VOCÊ ACERTOU NO Nº ${computador} EM ${nrTentativas} TENTATIVAS</b>`
    } else if (computador > jogador) {
        document.getElementById("resultado").innerHTML += 
            `<br>Você chutou ${jogador} pensei em um número MAIOR`
    } else if (computador < jogador) {
        document.getElementById("resultado").innerHTML += 
            `<br>Você chutou ${jogador} pensei em um número MENOR`
    }
}

function Novo(){
    document.getElementById("resultado").innerHTML = ""
    computador = parseInt(Math.random() * 100) + 1
    nrTentativas = 0
}
*/