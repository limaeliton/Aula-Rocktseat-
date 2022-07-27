// funções aceitam qualquer tipo de dado como argumento
function imprimirDado(dado) {
    console.log("outras tarefas")
    console.log(dado())
}

imprimirDado(function (){
    return 'olá mundo'
})


imprimirDado(1)
imprimirDado("texto")
imprimirDado(true)
imprimirDado({nome:'joão'})
imprimirDado([1,2,3])