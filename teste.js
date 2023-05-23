var frutas = ['Maçã','Laranja','Pera','Morango','Uva']
for (var indice in frutas) {
    console.log (frutas[indice])
}

frutas.forEach(element => {
    console.log (element)
});

var usuarios = []
var usuario = {"usuario":"Douglas", 
                "senha":"123"}
usuarios.push (usuario)

var usuario = {"usuario":"Ricardo", 
                "senha":"234"}
usuarios.push (usuario)

console.log (usuarios[1].senha)

console.log( usuarios.indexOf(usuario) )

