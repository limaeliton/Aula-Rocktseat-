
/*
  MANIPULANDO STRINGS E  ARRAYS

    Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
*/
// SPLIT >> DIVISÃO
// JOIN >> JUNTAR

let phrase = " eu quero viver o amor!"
let myArray = phrase.split(" ") // transforma o texto em Array
let phraseWithUnderscore = myArray.join("_") // transforma o Array em texto
console.log(phraseWithUnderscore.toLocaleLowerCase())


