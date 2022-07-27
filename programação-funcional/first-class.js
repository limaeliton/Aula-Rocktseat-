const sayMyName =()=> console.log('dell')
const runFunction = fn => fn()

sayMyName();

runFunction(sayMyName)
// a função foi passada como argumento ou parâmetro de outra função
runFunction(() => console.log('discover'))

console.log(runFunction(Math.random))