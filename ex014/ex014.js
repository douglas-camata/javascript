function Sortear() {
    document.getElementById("resultado").innerHTML = ""

    var cont = 1
    while (cont <= 6) {
        var nrSorteado = parseInt(Math.random() * 60) + 1
        document.getElementById("resultado").innerHTML +=`${nrSorteado} ` 
        cont++
    }

}
