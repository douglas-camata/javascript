
function Calcular() {
        
    //Receber o nome do aluno
    var nome = document.getElementById("aluno").value
    //Receber a nota 1
    var nota1 = document.getElementById("nota1").value
    //Receber a nota 2
    var nota2 = document.getElementById("nota2").value 

    if (nota1 > 10){
        alert ("Nota 1 não pode ser maior que 10")
        return
    }
    if (nota2 > 10){
        alert ("Nota 2 não pode ser maior que 10")
        return
    }

    //Calcular a média 
    //(nota1 + nota2 / 2)
    var media = (Number(nota1) + Number(nota2)) / 2
    //Se média maior ou igual a 7
    if (media >= 7) {
        //Exibir aluno APROVADO
        document.getElementById("resultado").innerHTML = 
            `<b class="aprov">O aluno ${nome} tirou nota ${nota1} e ${nota2} sua média
                foi ${media} <b>PASSOU DE ANO</b> <br>
                <img src=aprovado.svg>
            `
    } else {
        //Senão aluno REPROVADO
        document.getElementById("resultado").innerHTML = 
        `O aluno ${aluno} tirou nota ${nota1} e ${nota2} sua média
            foi ${media}  <b>NÃO PASSOU DE ANO</b> <br> 
            <img src=reprovado.svg>
        `
    }  
    
}



    /*
    
    function Calcular(){
    var aluno = document.getElementById("aluno").value
    var nota1 = Number(document.getElementById("nota1").value)
    var nota2 = Number(document.getElementById("nota2").value)
    var media = (nota1 + nota2) / 2
    
    if (nota1 > 10){
        alert("Nota não permitida, informe no máximo 10")
        exit
    }
    if (nota2 > 10){
        alert("Nota não permitida, informe no máximo 10")
        exit
    }

    if (media >= 7) {
        document.getElementById("resultado").innerHTML =
            `O aluno ${aluno} tirou nota ${nota1} e ${nota2} sua média
            foi ${media}  <br> <b>PASSOU DE ANO</b>`
    } else {
        document.getElementById("resultado").innerHTML =
            `O aluno ${aluno} tirou nota ${nota1} e ${nota2} sua média
            foi ${media}  <br> <b>NÃO PASSOU DE ANO</b>`
    }    
}
*/