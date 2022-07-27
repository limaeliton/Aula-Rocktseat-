/*
    Promise

    A promessa de que algo irá acontecer
    poderá dar certo ou errado
    mais irá acontecer

*/

let aceitar = false

console.log('pedir  uber')

const promessa = new promise((resolve, reject) => {
    
    if(aceitar) {
        return resolve('pedido aceito')
    }
    
    return reject('pedido negado')
})

console.log('aguardando')

promessa.then(result => console.log(result))
         .catch(erro => console(erro))
         .finally(()=> console.log('finalizada'))   

         console.log('aguardando')



