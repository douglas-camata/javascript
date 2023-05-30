
function Calcular() {
    var nome = document.getElementById("aluno").value
    var nota1 = document.getElementById("nota1").value
    var nota2 = document.getElementById("nota2").value 
 
    var possoCalcular = validarNotas(nota1, nota2)
    if (possoCalcular == false)
        return 

    var media = calcularMedia(nota1, nota2)

    exibirAprovacao(media)    
}

function validarNotas(nota1, nota2) {
    if (nota1 > 10){
        alert ("Nota 1 não pode ser maior que 10")
        return false
    }
    if (nota2 > 10){
        alert ("Nota 2 não pode ser maior que 10")
        return false
    }
}

function calcularMedia (nota1, nota2) {
    var mediaCalculada = (Number(nota1) + Number(nota2)) / 2
    return mediaCalculada
}

function exibirAprovacao (media, nome) {
    if (media >= 7) {
        document.getElementById("resultado").innerHTML = 
            `<b class="aprov">O aluno ${nome}  teve sua média ${media} <b>PASSOU DE ANO</b> <br>
                <img src=aprovado.svg>
            `
    } else {
        document.getElementById("resultado").innerHTML = 
        `O aluno ${nome} teve sua média ${media} <b>NÃO PASSOU DE ANO</b> <br> 
            <img src=reprovado.svg>
        `
    }    
}
