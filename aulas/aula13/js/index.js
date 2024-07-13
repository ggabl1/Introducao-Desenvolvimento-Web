let conteudoPrincipal = document.getElementById('conteudo-principal')
const buscarCEP = (cep) => {
fetch('https://viacep.com.br/ws/${cep}/json/', {
    methods: 'GET'
}).then(resposta => resposta.json())
    .then(dados => {
        conteudoPrincipal.innerHTML = `
            <h1>Endereço: </h1>
            <p>${dados.cep}</p>
            <p>${dados.logradouro}</p>
            <p>${dados.bairro}</p>
            <p>$dados.localidade - ${dados.uf}</p>
        `
    })
}