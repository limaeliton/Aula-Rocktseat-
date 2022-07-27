// clearTimeout vai cancelar um timeOut

const timeOut = 3000
const finished = () => console.log('done!')
          // a função foi passada como referência
          // função calbec > chamar devolta depois de 3segundos
        let timer =  setTimeout(finished, timeOut)
        clearTimeout(timer)
