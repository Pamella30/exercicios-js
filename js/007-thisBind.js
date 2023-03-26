const pessoa = {
    saudacao: 'Ola',
    falar(){
        console.log(this.saudacao)
    }

}

pessoa.falar()

// Fazendo a vinculacao

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()