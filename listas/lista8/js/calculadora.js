let calculadora = document.getElementById(`Calculadora`)
let numeroDigitado = ''
for(let indiceNumero = 0; indiceNumero  < 10; indiceNumero++){
    let botao = document.createElement('button')
    botao.textContent = indiceNumero
    botao.value = indiceNumero
    botao.id = `btn-${indiceNumero}`

    if (indiceNumero % 2 == 0){
        botao.className = 'btn-par btn'
    }
    else{
        botao.className = 'btn-impar btn'
    }

    botao.addEventListener(`click`, (evento) =>{
        numeroDigitado +=evento.target.value
        console.log(numeroDigitado)
    })

    calculadora.appendChild(botao)
}