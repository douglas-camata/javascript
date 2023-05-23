var filmes= []

function botaoFilmes() {
    var nome = document.getElementById("nome").value
    filmes.push(nome)
    document.getElementById('resultado').innerHTML = ''

    for (var i = 0; i < filmes.length ; i++) {
        document.getElementById('resultado').innerHTML +=
            `${filmes[i]} <br>`
    }
    
    document.getElementById("nome").value = ''
    document.getElementById("nome").focus()
}