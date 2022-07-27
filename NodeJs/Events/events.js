// {EventEmitter} é uma função do tipo classe por isso é possível criar um objeto
const {EventEmitter} = require('events')

const ev = new EventEmitter()

// ouvi o evento sempre
ev.on('saySomething' , (message) => {
    console.log('Eu ouvi você: ', message)
})
// ouvi o evento uma unica vez
ev.once('saySomething' , (message) => {
    console.log('Eu ouvi você: ', message)
})

// emiti o evento
ev.emit('saySomething' , "Eliton")
ev.emit('saySomething' , "Jão")
ev.emit('saySomething' , "Maria")
