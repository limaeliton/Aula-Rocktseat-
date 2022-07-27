const pilotos = ['senna', 'prost', 'schumacher', 'hamilton']

// a indexação (Index) começa pelo número o

console.log(pilotos[0])

// acessar o tamanho do array

console.log(pilotos.length)

// interável
for (const piloto of pilotos) {
    console.log(piloto)   
}

// adicionar elemento 
pilotos.push('alonso')
console.log(pilotos)

// encontrar um elemento 
const senna = pilotos.find(piloto => piloto === 'senna')
console.log(senna)

// deletar um elemento
pilotos.splice(1,1)
console.log(pilotos)