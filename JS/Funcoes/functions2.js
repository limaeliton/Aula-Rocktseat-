
// e possível criar funções dentro de variáveis.
// function expression
// function anonymous

let total = 0

// parâmetros (parameters)
const sum = function(number1 ,number2){
    return   number1 + number2

}

let number1 = 34
let number2 = 26

// console.log(`o número 1 é ${number1}`)
// console.log(`o número 2 é ${number2}`)
console.log(`a soma  é ${sum (number1 , number2)}`)
console.log(total)

//---------------------------------------------------------------------------------------------------------------------

function fazerSuco (fruta1 ,fruta2) {
    return 'suco de ' + fruta1  + fruta2
}

 const copo = fazerSuco(' banana ', ' maça ')

 console.log(copo)