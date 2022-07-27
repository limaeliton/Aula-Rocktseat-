
/*
    Function() Construtor

    * EXPRESSÃO NEW
    *CRIAR UM NOVO OBJETO
    *THIS KEYWORD

*/

function Person(name) {
    this.name = name
    this.walk = function(){
        return this.name + ' está andando'
    }

}

const eliton = new Person('lima')
const joao = new Person('jose')
console.log(eliton.walk())
console.log(joao.walk())