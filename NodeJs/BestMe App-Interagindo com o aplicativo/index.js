const question =[
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar",
    "O que me deixou feliz hoje?",
    "O Quantas pessoas ajudei hoje?",
]

const ask = ( index = 0) => {
                   // stdout escreve na tela
    return process.stdout.write("\n\n"+ question[index] + ">")
}
ask()
const answers =[]
// fica ouvindo (ON) eventos e quando tiver inserindo dados vai rodar a função
process.stdin.on('data', data => {
    answers.push(data.toString().trim())
    if(answers.length < question.length){
        ask(answers.length)
    }
    else{
        process.exit()
    }
   
})
// função de calbec
process.on('exit', () => {
    console.log(`
        Bacana Eliton

        O que você aprendeu hoje foi:
        ${answers[0]}

        O que te aborreceu e você poderia melhorar foi:
        ${answers[1]}

        O que te deixou feliz hoje:
        ${answers[2]}

        Você ajudou ${answers[3]} pessoas hoje!!

        Volte amanhã para novas reflexões!!
    
    `)
})