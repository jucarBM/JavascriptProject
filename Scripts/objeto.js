
var carro = {
    marca: "Ford",
    modelo: "Fiesta",
    ano: "2015",
    detalleDelAuto : function(){
        return "Marca: " + this.marca + " Modelo: " + this.modelo + " Año: " + this.ano;
    }
};

carro.marca = "Chevrolet"; // se puede llamar o asignar a una propiedad

// Objeto, funcion constructor
function Auto(marca, modelo, ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

var auto = new Auto("Ford", "Fiesta", "2015");
var auto2 = new Auto("Chevrolet", "Corsa", "2015");
var auto3 = new Auto("Ford", "Focus", "2015");

