// Orientado a Objetos

class Poligono {
    constructor(altura , largura){
        this.altura = altura
        this.largura = largura
    }
    get area() {
        return this.#calcularArea();
    }
    #calcularArea(){
        return this.altura * this.largura
    }
}

// criar o Objetos 
let poligono = new Poligono(50,60)
console.log(poligono.area)