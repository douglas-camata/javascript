var listaUsuarios = []

listaUsuarios = JSON.parse(localStorage.getItem('bdUsuarios'))
if (listaUsuarios == null) {
    listaUsuarios = []
}

function botaoEntrar() {
    var login = document.getElementById("login").value
    var senha = document.getElementById("senha").value

    if (validarUsuario(login, senha)) {
        alert('Bem vindo ao sistema')
    } else {
        alert('VERIFIQUE SEU USUÁRIO E SENHA OU SE CADASTRE')
    }
}

function validarUsuario(login, senha) {
    for (var i in listaUsuarios) {
        if (listaUsuarios[i].usuario == login && listaUsuarios[i].senha == senha) {
            return true
        }
    }
    return false
}

function botaoCadastrar() {
    location.href = 'ex025.html'
}