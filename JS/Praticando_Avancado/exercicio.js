
//1. DECLARE UMA VARIÁVEL DE NOME WEIGHT 
// let weight

// 2. QUE TIPO DE DADO É A VARIÁVEL ACIMA?

// console.log(typeof weight)

/*
    3. DECLARE UMa VARIÁVEL E ATRIBUA VALORES PARA CADA UM DOS DADDOS:
    *name: String
    *age: Number (integer)
    *stars: Number (float)
    *isSubscribed: Boolean
*/
 let name = 'Eliton'
 let age = 30
 let stars = 45.9
 let isSubscribed = true


/*
   4. A VARIÁVEL STUDENT ABAIXO É DE QUE TIPO DE DADOS?

   4.1 ATRIBUA A ELA AS MESMAS PROPRIEDADES E VALORES DE EXERCÍCIO 3.

   4.2 MOSTRE NO CONSOLE A SEGUINTE MENSAGEM:

   <NAME> DE IDADE <AGE> PESA < WEIGHT> KG.

   ATENÇÃO, SUBSTITUA <NAME> <AGE> E <WHEIGHT> PELOS VALORES DE CADA PROPRIEDADE DO OBJETO.
   
*/

let student = {
    name: 'eliton',
     age: 30,
     stats: 4.8,
     weight: 70
    
}


//console.log(`${student.name} de idade ${student.age} pesa ${student.weight}`)


/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nemhum valor,ou seja somente o Array vazio
*/
let students = []

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. ( não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

 students = [
    student
 ]

console.log(students)

/*
    7. Coloque no console o valor da posição zero do Array acima
*/

console.log(students[0])
/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/

const dell = {
    name: 'lima',
     age: 30,
     stats: 4.8,
     weight: 70
    
}

students [1] = dell

/*
students = [
    student,
    dell
 ]
*/

//console.log(students)


/*
    9. Sem rodar o código responda qual é a resosta do código e por que? Após sua resposta, rode o código e veja se você acertou  
*/

var a // é uma variável global.
console.log(a)
var a = 1