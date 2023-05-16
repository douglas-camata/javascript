function SortearMes() {
    var mesSorteado = parseInt(Math.random() * 16) + 1
    var nome = document.getElementById("nome").value

    switch (mesSorteado) {
        case 1:
            document.getElementById("resultado").innerHTML = `${nome} , você vai se casar no mês de Janeiro <br><img src='alianca.png'>`
            break
        case 2:
            document.getElementById("resultado").innerHTML = `${nome} , você vai se casar no mês de Fevereiro  <br><img src='alianca.png'>`
            break
        case 3:
            document.getElementById("resultado").innerHTML = `${nome} , você vai se casar no mês de Março  <br><img src='alianca.png'>`
            break
        case 4:
            document.getElementById("resultado").innerHTML = `${nome} , você vai se casar no mês de Abril  <br><img src='alianca.png'>`
            break
        case 5:
            document.getElementById("resultado").innerHTML = `${nome} , você vai se casar no mês de Maio  <br><img src='alianca.png'>`
            break
        case 6:
            document.getElementById("resultado").innerHTML = `${nome} , você vai se casar no mês de Junho  <br><img src='alianca.png'>`
            break
        case 7:
            document.getElementById("resultado").innerHTML = `${nome} , você vai se casar no mês de Julho  <br><img src='alianca.png'>`
            break
        case 8:
            document.getElementById("resultado").innerHTML = `${nome} , você vai se casar no mês de Agosto  <br><img src='alianca.png'>`
            break
        case 9:
            document.getElementById("resultado").innerHTML = `${nome} , você vai se casar no mês de Setembro  <br><img src='alianca.png'>` 
            break
        case 10:
            document.getElementById("resultado").innerHTML = `${nome} , você vai se casar no mês de Outubro  <br><img src='alianca.png'>`
            break
        case 11:
            document.getElementById("resultado").innerHTML = `${nome} , você vai se casar no mês de Novembro  <br><img src='alianca.png'>`
            break
        case 12:
            document.getElementById("resultado").innerHTML = `${nome} , você vai se casar no mês de Dezembro  <br><img src='alianca.png'>`
            break
        default :
            document.getElementById("resultado").innerHTML = `${nome} , VOCÊ NÃO IRÁ SE CASAR  <br><img src='solteiro.gif'>`
    }

}
