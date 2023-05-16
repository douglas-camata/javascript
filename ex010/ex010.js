
function Verificar() {
    var nome = document.getElementById("nome").value
    var senha = document.getElementById("senha").value
    
    if (nome == "adm" && senha == "123" ) {
        document.getElementById("resultado").innerHTML = 
            `<b class="verde">Seja bem vindo ${nome}, 
            você validou e entrou no sistema</b>`
    } else {
        document.getElementById("resultado").innerHTML = 
            `<b class="vermelho">Usuário ou senha inválido</b>`
   }
}