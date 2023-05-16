
function calcular() {
    let n1 = document.getElementById("nr1").value
    let n2 = document.getElementById("nr2").value

    let soma = Number(n1) + Number(n2)
    let sub = n1 - n2
    let mult = n1 * n2
    let div = n1 / n2
    let resto = n1 % n2
    let exp = n1 ** n2

    document.getElementById('resultado').innerHTML =
        `${n1} + ${n2} = ${soma} <br>
            ${n1} - ${n2} = ${sub} <br>
            ${n1} * ${n2} = ${mult} <br>
            ${n1} / ${n2} = ${div} <br>
            ${n1} % ${n2} = ${resto} <br>
            ${n1} ** ${n2} = ${exp} <br>
            `
}