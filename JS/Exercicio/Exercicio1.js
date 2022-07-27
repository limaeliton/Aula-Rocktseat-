/*   ### Transformar notas escolares

    Crie um algoritmo que transforme as notas do sistema númerico para sistema de notas em caracteres do tipo A , B ,C

    A VARIÁVEL PRINCIPAL É NOTAS. POIS APARTI DELA SERA FEITO O SISTEMA

    * de 90 para cima - A
    * entre 80 - 89   - B
    * entre 70 - 79   - c
    * entre 60 - 69   - D
    * menor que 60    - F

*/
let score = 84

function getScore(score) {

    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    let scoreFinal;

    if (scoreA) {
        scoreFinal = 'A'
    }
    else if (scoreB) {
        scoreFinal = 'B'
    }
    else if (scoreC) {
        scoreFinal = 'C'
    }
    else if (scoreD) {
        scoreFinal = 'D'
    }
    else if (scoreF) {
        scoreFinal = 'F'
    }
    else {
        scoreFinal = 'nota ivalida'
    }
    return scoreFinal

}

console.log(getScore(0))
console.log(getScore(-1))
console.log(getScore(1))
console.log(getScore(45))
console.log(getScore(61))
console.log(getScore(75))
console.log(getScore(90))
console.log(getScore(98))
console.log(getScore(101))

