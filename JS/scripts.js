var resultado = "";
for (i = 1; i <= 7; i++) {
    for (j = 1; j <= 39; j++) {
        if (i == 1 || i == 7)
            resultado += "-";
        else if (j == 1 || j == 39)
            resultado += "|";
        else 
            resultado += " ";
    }
    resultado += "\n";
}
console.log(resultado);



let tracos = '' 
let barras = ''
for (i=0; i-39;i++){
  tracos +='-'
  if(i==0 || i==38){
    barras+= '|'
  }else{
    barras+=' '
  }
  
}
 
 print(tracos)
 print(barras)
 print(barras)
 print(barras)
 print(barras)
 print(tracos)
