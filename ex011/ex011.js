function Verificar() {
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value
    
    if (idade >= 18 && idade <= 65) {
        document.getElementById("resultado").innerHTML = 
            `<b class="verde">${nome}, você é obrigado a votar</b>`
    } else if (idade >= 16 || idade > 65) {
        document.getElementById("resultado").innerHTML = 
            `<b class="azul">${nome}, você não é obrigado a votar</b>`
    } else if (idade < 16) {
        document.getElementById("resultado").innerHTML = 
            `<b class="vermelho">${nome}, você não pode votar</b>`
    }
}

function CorrigirProva() {
    var caneta1 = "Preta"
    var caneta2 = "Vermelha"

    if (caneta1 == "Azul" && caneta2 == "Vermelha"){
        //Consegue corrigir todas as provas
    } else if (caneta1 == "Azul" && caneta2 != "Vermelha"){ 
        //Consegue corrigir apenas as questões certas
    } else if (caneta1 != "Azul" && caneta2 == "Vermelha"){ 
        //Consegue corrigir apenas as questões erradas
    } else {
        //Não consegue corrigir nenhuma
    }
}
