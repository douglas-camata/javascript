var listaCatalogo = []
listaCatalogo = JSON.parse(localStorage.getItem('bdCatalogo'))
if (listaCatalogo == null) {
    listaCatalogo = []
}

exibirSeries(listaCatalogo)

function botaoCadastrar() {
    var nome = document.getElementById("nome").value
    var imagem = document.getElementById("imagem").value
    var gif = document.getElementById("gif").value
    var temporadas = document.getElementById("temporadas").value
    var categoria = document.getElementById("categoria").value

    var serie = {
        nome: nome,
        link: imagem,
        gif: gif,
        temporadas: temporadas,
        categoria: categoria
    }
    listaCatalogo.push(serie)
    gravarLocalStorage()

    exibirSeries(listaCatalogo)

    document.getElementById("nome").value = ''
    document.getElementById("imagem").value = ''
    document.getElementById("gif").value = ''
    document.getElementById("temporadas").value = '1'
    document.getElementById("categoria").value = 'Romance'
    document.getElementById("nome").focus()
}

function gravarLocalStorage() {
    localStorage.setItem('bdCatalogo', JSON.stringify(listaCatalogo))
}

function filtrarSeries() {
    const nome = document.getElementById("nomeBusca").value
    var categoria = document.getElementById("categoriaBusca").value

    var listaFiltrada = listaCatalogo.filter(item => {
        return item.nome.indexOf(nome) != -1 && item.categoria.indexOf(categoria) != -1
    })
    exibirSeries(listaFiltrada)
}

function exibirSeries(lista) {
    listarSeries(lista, 'lista')
    var listaRomances = listaCatalogo.filter(item => item.categoria.indexOf('Romance') != -1)
    listarSeries(listaRomances, 'lista-romances')
    var listaSuspenses = listaCatalogo.filter(item => item.categoria.indexOf('Suspense') != -1)
    listarSeries(listaSuspenses, 'lista-suspenses')
}

function listarSeries(lista, id) {
    document.getElementById(id).innerHTML = ''

    lista.forEach((item, i) => {
        const cardSerie = 
            `<div class='card'>
                <img class='img' src='${item.link}' 
                        id='_${i}' 
                        onMouseEnter="exibirIMG('${item.gif}', '_${i}')" 
                        onMouseLeave="exibirIMG('${item.link}', '_${i}')"> 
                <p>${item.nome} </p>
                <img src='remove.svg' class='excluir' onclick='excluirSerie(${i})'>
            </div>`
        document.getElementById('lista').innerHTML += cardSerie
    })
}
function exibirIMG (link, id){  
    document.getElementById(id).src = link
}

function excluirSerie(i) {
    if (confirm('Deseja realmente excluir o item?')) {
        listaCatalogo.splice(i, 1)
        gravarLocalStorage()
        filtrarSeries()
    }
}
