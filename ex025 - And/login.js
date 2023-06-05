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
    var encontrado = false
    //for (var i in listaUsuarios) {
    listaUsuarios.forEach( (item, i) => {
        if (item.usuario == login && listaUsuarios[i].senha == senha) {
            encontrado = true
        }
    })
    return encontrado
}

function botaoCadastrar() {
    location.href = 'ex025.html'
}