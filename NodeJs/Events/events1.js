// vai herdar as funcionalidades do { EventEmitter } para uma função |function Character(name) {
//  }  this.name = name

const {inherits} = require('util')
const { EventEmitter } = require('events')

// função construtura
function Character(name) {
    this.name = name
}
// traz as funções do EventEmitter para o construtor
inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin')
chapolin.on('help', () => console.log(`EU! O ${chapolin.name} colorado!"`))

console.log('oh! e agora, quem poderá me defender')
chapolin.emit('help')

