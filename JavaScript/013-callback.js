notas = [ 2, 3, 7, 8, 10]

//Sem callback
let notasBaixas = []
for (i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//Com callback
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)

//Com callback e arrow function
const notasBaixas3 = notas.filter( nota => nota <7)
console.log(notasBaixas3)