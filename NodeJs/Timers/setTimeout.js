// setTimeout vai rodar uma função depois de X milissegundos

const timeOut = 3000
const finished = () => console.log('done!')
          // a função foi passada como referência
          // função calbec > chamar devolta depois de 3segundos
setTimeout(finished, timeOut)
console.log('Mostrar')
