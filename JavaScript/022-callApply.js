function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}` 
}

const produto = {
    nome: `Laptop`,
    preco: 5000,
    desconto: 0.15,
    getPreco
}

global.preco = 10
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {
    preco: 200000,
    desc: 0.20
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.15, '£'))
console.log(getPreco.apply(global, [0.15, '$']))