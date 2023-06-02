var listaUsuarios = []
listaUsuarios = JSON.parse(localStorage.getItem('bdListaUsuarios'))
if (listaUsuarios == null){
    listaUsuarios = []
}
exibirUsuarios()

function validarCadastro(nomeUsuario, usuario, senha, confSenha){
    if (nomeUsuario == '' || usuario == '' || senha == '' || confSenha == '') {
        alert ('Verifique os dados cadastrados. Não pode ter campos vazio.')
        return false
    }

    if (senha != confSenha) {
        alert('As suas senhas não conferem.')
        return false
    }

    return true
}

function botaoCadastro() {
    var nomeUsuario = document.getElementById("nome").value
    var usuario = document.getElementById("usuario").value
    var senha = document.getElementById("senha").value
    var confSenha = document.getElementById("senha2").value
    
    var possoCadastrar = validarCadastro(nomeUsuario, usuario, senha, confSenha)
    if (possoCadastrar == false) {
        return false
    }
    
    var objUsuario = {
        nome: nomeUsuario,
        login: usuario,
        senha: senha 
    }
    listaUsuarios.push(objUsuario)
    localStorage.setItem( 'bdListaUsuarios', JSON.stringify(listaUsuarios)) 

    exibirUsuarios()

    document.getElementById("nome").value = ''
    document.getElementById("usuario").value = ''
    document.getElementById("senha").value = ''
    document.getElementById("senha2").value = ''
    document.getElementById("nome").focus()

    alert ('Usuário cadastro com sucesso')
    window.location.href = 'login.html'

}

function botaoCadastrese (){
    location.href = 'ex025.html'
}

function exibirUsuarios(){
    document.getElementById('resultado').innerHTML = ''
    
    listaUsuarios.forEach( (item, indice) => {
        document.getElementById('resultado').innerHTML +=
            `<div>
                <b>Nome:</b> ${item.nome} - <b>Login: </b> ${item.login}
                <img src='excluir.svg' onclick='excluirUsuario(${indice})'>
            </div>`
    } )
}

function excluirUsuario(indice){
    listaUsuarios.splice (indice, 1)
    localStorage.setItem( 'bdListaUsuarios', JSON.stringify(listaUsuarios)) 
    exibirUsuarios()
}

function botaoLogin(){
    var usuario = document.getElementById("usuario").value
    var senha = document.getElementById("senha").value

    var encontrou = false
    listaUsuarios.forEach ( item => {
        if (usuario == item.login && senha == item.senha) {
            alert (`Bem vindo ao sistema, ${item.nome}`)
            encontrou = true
        }
    } )

    if (encontrou == false) {
        alert('Usuário não encontrado')
    }   

}