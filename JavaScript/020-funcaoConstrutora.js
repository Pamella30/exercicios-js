function Pessoa(nome) {
    this.nome = nome

    this.falar = function(){
        console.log(`Meu nome e ${this.nome}`)
    }
}

const criandoPessoa = new Pessoa('Pamella')
criandoPessoa.falar()