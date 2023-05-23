var meuVetor = []

meuVetor.push(10)
meuVetor.push("Douglas")
meuVetor.push(true)

console.log(meuVetor)

//Atributo que contem o tamanho do vetor
meuVetor.length

meuVetor.push(8)

//Método .sort() - ordena o vetor
meuVetor.sort()

//Método push adiciona novo elemento ao final do vetors
meuVetor.push("Teste")

//Converte o vetor em um único texto
console.log('toString() -> ' + meuVetor.toString())

//Igual ao toString() porém é possível colocar um separador entre os elementos
console.log('join() -> ' + meuVetor.join('-'))

//.pop() Remove o último elemento
meuVetor.pop()
console.log('pop() -> ' + meuVetor)

//.shift() - Remove o primeiro elemento do vetor
console.log(meuVetor)
meuVetor.shift()
console.log(meuVetor)

//.unshift() - Insere um primeiro elemento do vetor
console.log(meuVetor)
meuVetor.unshift('ahaha')
console.log(meuVetor)

//indexOf("") - Pesquisa o valor igual que está dentro do vetor e retorna o indice dele
meuVetor.indexOf(10)

for (let pos in meuVetor){
    console.log (meuVetor[pos])
}