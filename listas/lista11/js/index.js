let inputValorBruto = document.getElementById('valor-bruto');
let inputValorLiquido = document.getElementById('valor-liquido');
let botao = document.getElementById('btn-calcular');

botao.addEventListener('click', () => {
    let valorBruto = Number(inputValorBruto.value);
    let taxa = valorBruto * 15/100;
    let valorLiquido = valorBruto - taxa;
    inputValorLiquido.value = valorLiquido
});
