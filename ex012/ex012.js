var nrSorteado = parseInt(Math.random() * 100) + 1
var nrTentativas = 0

function Adivinhar() {
    var nrChute = prompt("Chute um número")
    nrTentativas++

    if (nrSorteado == nrChute){
        document.getElementById("resultado").innerHTML +=
            `<b>PARABÉNS VOCÊ ACERTOU NO Nº ${nrSorteado} em ${nrTentativas}`
    } else if (nrSorteado > nrChute) {
        document.getElementById("resultado").innerHTML +=
          `O nr sorteado é MAIOR que o nº ${nrChute} <br>` 
        if (nrTentativas >= 5) {
            alert("GAME OVER, nº de tentativas excedidas")
        }
    } else if (nrSorteado < nrChute) {
        document.getElementById("resultado").innerHTML +=
          `O nr sorteado é MENOR que o nº ${nrChute} <br>` 
        if (nrTentativas >= 5) {
            alert("GAME OVER, nº de tentativas excedidas")
        }
    } 
}

function Novo(){
    document.getElementById("resultado").innerHTML = ""
    nrSorteado = parseInt(Math.random() * 100) + 1
    nrTentativas = 0
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