// passo: modelando
class Queue {
    constructor() {
        this.data = [];
    }
    enqueue(item) {
        this.data.push(item);
        console.log(`${item} chegou na fila!`)
    }

    dequeue() {
       const item = this.data.shift();
       console.log(`${item} saiu da fila!`)  
    }
}

// 2: Utilizando 
const fila = new Queue()

fila.enqueue('maira')
fila.enqueue('jão')
fila.enqueue('josé')
fila.dequeue()
fila.dequeue()
fila.dequeue()
