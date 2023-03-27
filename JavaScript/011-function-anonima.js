const soma = function (n1, n2) {
    return n1 + n2
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(2, 2)
imprimirResultado(3, 3, soma)

imprimirResultado(4, 4, function(n1, n2){
    return n1 - n2
})

imprimirResultado(5, 5, (n1, n2) => n1 * n2 )

const pessoa = {
    falar: function (){
        return 'Oi'
    }
}

pessoa.falar()