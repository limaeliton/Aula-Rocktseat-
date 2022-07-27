// clearInterval irá cancelar um setInterval registrado


const timeOut = 1000
const checking = () => console.log('checking!')
          // a função foi passada como referência
          // função calbec > chamar devolta depois de 1segundos
let interval = setInterval(checking, timeOut)

// setTimeout vai rodar uma função depois de X milissegundos
setTimeout(() => clearInterval(interval), 4000)
