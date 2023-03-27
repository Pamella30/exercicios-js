//funcao NomeDaFuncao(paramentro){
//  	codigo a ser executado
//}
//chamando a funcao
//console.log('argumento/paramentro')

function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Pamella') 

   //

   function estudando(){
    return 'Eu estou estudando'
   }

   function materia(materia){
    return materia
   }

   console.log(`${estudando()} a materia ${materia('JavaScript')}`)

   //

   function paisOrigem(paisOrigem){
    return paisOrigem
   }

   function paisAtual(paisAtual){
    return paisAtual
   }

   console.log(`Meu pais de origem e o ${paisOrigem(`Brasil`)} mas atualmente eu moro na ${paisAtual(`Irlanda`)}`)