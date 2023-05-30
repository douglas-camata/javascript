var listaFilmes = []

//Buscando as informações do localStorage gravadas no Navegador
//Utilizo o método getItem com o nome exatamente que utilizamos no setItem
listaFilmes = JSON.parse(localStorage.getItem('bdFilmes'))
if (listaFilmes == null){
    listaFilmes = []
}
exibirFilmes()

//Exibindo no console a lista de filmes que carregou no vetor
console.log(listaFilmes)

function validarCadastro(nomeFilme, imagemFilme){
    if (nomeFilme != '' && imagemFilme != '') {
        return true
    } else {
        return false
    }
}

function botaoFilmes() {
    var nomeFilme = document.getElementById("nome").value
    var imagemFilme = document.getElementById("imagem").value
    
    var possoCadastrar = validarCadastro(nomeFilme, imagemFilme)
    if (possoCadastrar == false) {
        alert ('Verifique os dados antes de cadastrar')
        return 
    }
    
    var filme = {
        nome: nomeFilme,
        link: imagemFilme
    }
    listaFilmes.push(filme)
    //Utilizando o localStorage que irá gravar o nosso vetor de filmes
    //no método setItem, preciso passar como parâmetro o nome do espaço
    //que o navegador irá reservar e passo também o vetor de filmes
    //convertido em formato JSON
    localStorage.setItem( 'bdFilmes', JSON.stringify(listaFilmes) )

    exibirFilmes()

    document.getElementById("nome").value = ''
    document.getElementById("imagem").value = ''
    document.getElementById("nome").focus()
}

function botaoIndicado(){
    var nrSorteado = parseInt(Math.random() * listaFilmes.length)
    document.getElementById('indicado').innerHTML = 
        `<div>
            <img src='${listaFilmes[nrSorteado].link}' class='img'> 
            <p>${listaFilmes[nrSorteado].nome}</p>
        </div>`
}

function exibirFilmes(){
    document.getElementById('resultado').innerHTML = ''

    for (var i in listaFilmes) {
        document.getElementById('resultado').innerHTML +=
            `<div>
                <img src='${listaFilmes[i].link}' class='img'> 
                <p>${listaFilmes[i].nome}</p>
            </div>`
    }
}

function botaoLimpar(){
    listaFilmes = []
    localStorage.setItem( 'bdFilmes', JSON.stringify(listaFilmes) )
    exibirFilmes()
}