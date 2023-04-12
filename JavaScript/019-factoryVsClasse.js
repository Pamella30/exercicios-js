class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome e ${this.nome}`)
    }
}

const p1 = new Pessoa('Pamella')
p1.falar() 

// Factory

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome e ${nome}`)
    }
}

const p2 = criarPessoa('Pamella')
p2.falar()

