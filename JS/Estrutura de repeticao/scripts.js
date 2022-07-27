// for...in

let person = {
    name: 'José',
    age: 30,
    weight: 88.6
}

for(let property in person){
    console.log(property)
    //console.log(person.name)
    console.log(person[property])  //[property]) e convertido em String e mostra as propriedades completas.
}


