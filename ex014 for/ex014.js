function Sortear() {
    document.getElementById("resultado").innerHTML = ""

    for (let i = 1; i <= 6; i++) {
        var nrSorteado = parseInt(Math.random() * 60) + 1
        document.getElementById("resultado").innerHTML +=`${nrSorteado} ` 
    }
    
}
