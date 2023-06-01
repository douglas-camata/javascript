var frutas = ['Maçã', 'Laranja', 'Pera', 'Morango', 'Uva']
for (var indice in frutas) {
    console.log(frutas[indice])
}

frutas.forEach(element => {
    console.log(element)
});

var usuarios = []
var usuario = {
    "usuario": "Douglas",
    "senha": "123"
}
usuarios.push(usuario)

var usuario = {
    "usuario": "Ricardo",
    "senha": "234"
}
usuarios.push(usuario)

console.log(usuarios[1].senha)

console.log(usuarios.indexOf(usuario))

usuarios.forEach( function (item) {
    console.log (item)
})

usuarios.forEach(exibirItems)

function exibirItems(el) {
    console.log(el)
}

var usuarioLogin = 'Douglas'
var senhaLogin = '123'

usuarios.forEach(item => {
        if ( usuarioLogin == item.usuario && senhaLogin == item.senha ) {
            console.log('encontrou');
        }
    }
)

usuarios.forEach(item => {
    console.log (item.usuario.indexOf('c'))
})

var busca = 'o'
marcas = ["Fiat", "Chevrolet", "Ford", "Volkswagen"]
marcasIniciadasComF = []
marcas.forEach (item => {
    if (item.indexOf(busca) != -1) 
        marcasIniciadasComF.push (item)
})
console.log(marcasIniciadasComF)

var catalogo = [
    {nomefilme: 'Avatar', link: 'avatar.jpg', genero: 'Ação', categoria:'Jogo'},
    {nomefilme: 'Titanic', link: 'titanic.jpg', genero: 'Romance', categoria:'Filme'},
    {nomefilme: 'Pânico IV', link: 'panico.jpg', genero: 'Terror', categoria:'Filme'},
    {nomefilme: 'Vingadores', link: 'vingadores.jpg', genero: 'Ação', categoria:'Filme'}
]
var buscaGenero = 'Ação'
var buscaCat = 'Filme'
var filmesAcao = []
catalogo.forEach (item => {
    if (item.categoria.indexOf(buscaCat) != -1 && item.genero.indexOf(buscaGenero) != -1){
        filmesAcao.push(item)
    }
})
console.log(filmesAcao)

console.log(catalogo.indexOf({nomefilme: 'Titanic', link: 'titanic.jpg', genero: 'Romance', categoria:'Filme'}));

var newArray = catalogo.filter(item => {
    return item.nomefilme.indexOf('V') >= 0 && item.genero == 'Terror'
})
console.log ('Filter ', newArray)
