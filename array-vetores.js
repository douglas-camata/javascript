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











//Método forEach de um vetor percorre e retorna todos os elementos do vetor
//individualmente na variavel fruta, pelo exemplo abaixo
novaListaFrutas.forEach( fruta => {
    console.log (fruta)
    } 
)







