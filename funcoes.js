//Chamando a função e passando o nº com PARAMETRO que desejo ver a tabuada
ricardoCalculeTabuada(3) //Douglas
ricardoCalculeTabuada(9) //Maria F.
ricardoCalculeTabuada(240) //Lima

//Função com entrada de parâmetro e sem retorno (sem saída de dados)
//Criando a função para gerar no console a tabuada do nr desejado
function ricardoCalculeTabuada(nr) {
    for (var i = 1; i <= 20; i++) {
        console.log (` ${nr} x ${i} = ${nr*i} `)
    }
}

//Chamando função para calcular o dobro e receber o resultado na variável
var resultado
resultado = calcularDobro(544075)  // Douglas
console.log (resultado)

//Declarando a função recebendo o parametro e retornando um valor
function calcularDobro(nr){  // Ricardo
    var dobro = nr * 2
    return dobro // com o comando return "devolve" o valor calculado para a chamada
}

//Criando uma função e recebendo 2 valores e retornando a média
function calcularMedia(nota1, nota2) {
    var soma = nota1 + nota2
    var media = soma / 2
    return media
}
//Chamando a função de calcular média
var mediaAluno1 = calcularMedia(9, 7)
console.log (`Média do aluno 1 é ${mediaAluno1}`)
var mediaAluno2 = calcularMedia(5, 3)
console.log (`Média do aluno 2 é ${mediaAluno2}`)


var login = 'admin'
var senha = '123'
var possoAcessar = validarLogin(login, senha)
if (possoAcessar == true) {
    console.log ('Você pode acessar o sistema')
} else {
    console.log ('Você não tem permissão')
}

function validarLogin(login, senha) {
    if (login == '' || senha == '') {
        return false
    }
    if (login == 'admin' && senha == '123') {
        return true
    } else {
        return false
    }
}


