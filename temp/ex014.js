function Sortear() {
    document.getElementById("resultado").innerHTML = ""

    var nrSorteado = parseInt(Math.random() * 20) + 1

    for (let i = 1; i <= nrSorteado; i++) {        
        document.getElementById("resultado").innerHTML +=` <img src="aprovado.svg" style="width=10%;">` 
    }
    
}
