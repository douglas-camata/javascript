function botaoFilmes() {
    var filmes = ['Interestelar', // 0
                    'Star Wars', // 1
                    'Harry Potter', // 2
                    'Super Mario World', // 3
                    'Vingadores', // 4
                    'Barbie']  // 5

    for ( var i = 0; i < filmes.length ; i++) {
        document.getElementById('resultado').innerHTML +=
            `Posição no vetor ${i} - Filme ${filmes[i]} <br>`
    }
}