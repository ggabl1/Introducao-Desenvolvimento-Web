// função sem parametros
function imprimirNome(params) {
    console.console.log("fulano");
}

//imprimirNome()
//funções com parametros

function compararnumero(n1, n2){
    if (n1 === n2){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

var num1 = document.getElementById('n1')
var num2 = document.getElementById('n2')
var resultado = document.getElementById('resultado')

function soma(){
    var soma = Number(num1.value) + Number(num2.value)
    resultado.textContent = soma
}
imprimirNome()
compararnumero()
soma()