function criarProduto(nome, preco){
    return {
        nome, 
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Celular', 1000))
console.log(criarProduto('Fone de ouvido', 100))