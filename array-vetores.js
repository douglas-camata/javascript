//Declarando um array vazio
var meuVetor = []

//Criando vetores com dados
var numeros = [4, 1, 18, 2, 7]
var nomes = ['Silvia', 'Marcos', 'Sandra']
var novoVetor = [20, 'SESI', true]

//Acessando os dados de um vetor
console.log( nomes[1] )
console.log ( novoVetor[0] )

//Verificando o tamanho de um vetor
console.log (nomes.length)

//indice        0         1         2        3        4
var frutas = ['Maçã', 'Laranja', 'Pera', 'Morango', 'Uva']
//faço um for para percorrer todo o tamanho do vetor
for (var i=0; i < frutas.length; i++) {
    // Coloco o i no indice da frutas para pegar o
    // valor de cada indice do vetor
    console.log ( frutas[i] )
}

//Adicionando novo valor no FINAL do vetor
frutas.push ('Abacaxi')
console.log ( frutas.length)
console.log ( frutas )

var novaListaFrutas = []    // []  -
novaListaFrutas.push ('Limão')
console.log (novaListaFrutas)   // ['Limão]
novaListaFrutas.push ('Melância')
console.log (novaListaFrutas)   // ['Limão', 'Melância']

novaListaFrutas[0] = 'Melão'
console.log (novaListaFrutas)   // ['Melão', 'Melância']
novaListaFrutas[1] = 'Banana'
console.log (novaListaFrutas)   // ['Melão', 'Banana']
novaListaFrutas.push ('Melância')
console.log (novaListaFrutas)   // ['Melão', 'Banana', 'Melância']
novaListaFrutas[3] = 'Abacate'
console.log (novaListaFrutas)   // ['Melão', 'Banana', 'Melância', 'Abacate']
novaListaFrutas.push ('Mamão')

for (var i=0; i < frutas.length; i++) {
    console.log ( frutas[i] )
}

// for in -> não preciso inicializar uma variável de contador do loop
for (var pos in novaListaFrutas){
    console.log ('novaListaFrutas[' + pos + '] ' + novaListaFrutas[pos])
} 

//O método forEach - significa para cada item do vetor
//dentro do parenteses colocamos a variável que irá
//receber o conteúdo de cada linha do vetor
//e com o => {} informamos o bloco que irá executar para
//cada linha
frutas.forEach ( item => { 
    console.log ('Item pelo forEach ', item)
 }  )
//Quando precisamos do índice também o colocamos entre ()
// assim como no exemplo abaixo
 frutas.forEach ( (item, pos) => { 
    console.log ('Item pelo forEach com posição ', pos ,item)
 }  )


 











//Método forEach de um vetor percorre e retorna todos os elementos do vetor
//individualmente na variavel fruta, pelo exemplo abaixo
novaListaFrutas.forEach( fruta => {
    console.log (fruta)
    } 
)







