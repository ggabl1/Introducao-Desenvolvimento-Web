let num1 = document.getElementById('n1')
let num2 = document.getElementById('n2')
function multiplica(n1,n2){
    let resultadoM = n1 * n2
    console.log(resultadoM)
}
function divide(n1, n2){
    let resultadoD = n1/n2
    console.log(resultadoD)
}

multiplica(Number(num1.value), Number(num2.value))