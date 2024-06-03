
 
var bancoDeDados = [
    {
        nome: "bolo de morango",
        descrição: "melhor bolo",
        preco: 1000,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "bolo de chocolate",
        descrição: "topee",
        preco: 100,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "bolo de cenoura com chocolate",
        descrição: "hummmmmm bolu",
        preco: 200,
        imagem: "https://via.placeholder.com/150"
    }
]

var conteudoPrncipal = document.getElementById('conteudo-principal')
for (var produto of bancoDeDados){
    var conteudoProduto = document.createElement('div')
    conteudoProduto.className = "conteudo-produto"

    var imagem = document.createElement('div')
    imagem.src = produto.imagem
    conteudoProduto.appendChild(imagem)

    var nomeProduto = document.createElement('h2')
    nomeProduto.textContent = produto.nome
    conteudoProduto.appendChild(nomeProduto)

    var descricaoProduto = document.createElement('p')
    descricaoProduto.textContent = produto.descrição
    conteudoProduto.appendChild(descricaoProduto)

    var precoProduto = document.createElement('p')
    precoProduto.textContent = `R$ ${produto.preco}`
    conteudoProduto.appendChild(precoProduto)

    var botoes = document.createElement('div')
    botoes.className = "btn"

    var botaoComprar = document.createElement('button')
    botaoComprar.textContent = "comprar"
    botoes.appendChild(botaoComprar)
    
    conteudoPrncipal.appendChild(conteudoProduto)
}