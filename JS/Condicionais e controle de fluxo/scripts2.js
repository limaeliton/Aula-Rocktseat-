// IF ... ELSE

let temperature = 38.4
let hightemperature = temperature >= 37.5
let mediumtemperature = temperature < 37.5 && temperature >= 37

/*
if(temperature >= 37.5){
console.log( 'febre alta')
}
else if(temperature < 37.5 && temperature >= 37){
    console.log('febre moderada')
}
else{
    console.log('saudável')
}
*/

if(hightemperature){
    console.log( 'febre alta')
}
else if(mediumtemperature){
    console.log('febre moderada')
}

else{
    console.log('saudável')
}
