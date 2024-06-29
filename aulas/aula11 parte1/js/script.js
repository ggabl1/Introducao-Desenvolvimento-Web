let inputvalorLiquidoBruto = document.getElementById('valor-bruto')
let inputValorLiquido = document.getElementById('valor-liquido')
let botao = document.getElementById('btn-calcular')
let taxa = 200


botao.addEventListener('click', () => {
    let valorBruto = number(inputValorBruto.value)
    inputValorLiquido.value = valorBruto - taxa
})