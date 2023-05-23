function botaoNrImpares() {
    var inicio = Number(document.getElementById("nr_i").value)
    var fim = Number(document.getElementById("nr_f").value)
    document.getElementById("resultado").innerHTML = 
        ` Relação de Nº ímpares de ${inicio} até ${fim} <br><br> `
    for (let i = inicio; i <= fim; i++){
        if (i % 2 == 1) {
            document.getElementById("resultado").innerHTML += `${i}<br>`
        }        
    }    
}