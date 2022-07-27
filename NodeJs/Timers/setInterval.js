// setInterval irá rodar uma função N vezes
// depois de X milissegundos

const timeOut = 1000
const checking = () => console.log('checking!')
          // a função foi passada como referência
          // função calbec > chamar devolta depois de 1segundos
setInterval(checking, timeOut)

