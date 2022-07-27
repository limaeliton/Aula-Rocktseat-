// throw >> lançar

// try...catch >> tente... pegue

function sayMyName(name = ''){
    if(name === ''){
        throw 'Nome é obrigatório'

    }

    console.log(name)
}

try {
    sayMyName('eliton')
} catch(e){
    console.log(e)
}

console.log ('após ao try/catch')