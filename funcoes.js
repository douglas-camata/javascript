//Declarando uma função sem parametro e sem retorno
function exibirInformacao(){
    console.log ('Executei a função exibir info')
}
// Chamando a minha função
exibirInformacao()

//Função com entrada de parâmetro e sem retorno (sem saída de dados)
//Criando a função para gerar no console a tabuada do nr desejado
function ricardoCalculeTabuada(nr){
    for (var i=0; i<= 30; i++){
        console.log (`${nr} x ${i} = ${nr * i}`)
    }
}
//Chamando a função e passando o nº com PARAMETRO que desejo ver a tabuada
ricardoCalculeTabuada(428)
ricardoCalculeTabuada(50)

//Declarando a função recebendo o parametro e retornando um valor
function ricardoCalculeDobro(nr){
    let dobro = nr * 2
    return dobro
}

//Chamando função para calcular o dobro e receber o resultado na variável
var resultado = ricardoCalculeDobro(7)
console.log (resultado)
 resultado = ricardoCalculeDobro(738374)
console.log (resultado)



