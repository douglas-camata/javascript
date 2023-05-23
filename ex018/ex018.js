function botaoGerarImagens(){
    var vezes = document.getElementById("vezes").value
    document.getElementById("resultado").innerHTML = ''

    for (var i = 1; i<=vezes ; i++) {
        document.getElementById("resultado").innerHTML += 
            "<img src='coracao.svg' class='coracao'>"
    } 
}