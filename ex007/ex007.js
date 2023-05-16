function Pontos1() {
    var pt1 = Number(document.getElementById("pt1").innerHTML)
    pt1++
    document.getElementById("pt1").innerHTML = pt1
}
function Pontos2() {
    var pt2 = Number(document.getElementById("pt2").innerHTML)
    pt2++
    document.getElementById("pt2").innerHTML = pt2
}

function P1_Basquete(pt){
    var ponto = document.getElementById("pt3").innerHTML
    ponto = Number(ponto) + pt
    document.getElementById("pt3").innerHTML = ponto
}
function P2_Basquete(pt){
    var ponto = document.getElementById("pt4").innerHTML
    ponto = Number(ponto) + pt
    document.getElementById("pt4").innerHTML = ponto
}