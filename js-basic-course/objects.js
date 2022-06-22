//Sntaxis Para la creacion de un objeto

var Objeto = {};

var miAuto = {
    marca: "Ford",
    modelo: "Explorer",
    annio: 2022,
//Pademos Agregar Valores Como Metodos de La Siguiente Manera
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};
miAuto.detalleDelAuto();//  R/ Auto Explorer 2022

//Manera de obtener informacion especifica del objeto
console.log(miAuto.marca); // Ford
console.log(miAuto.annio); // 2022

// el Elemento This. hace referencia a su padre o lo reemplaza
// En el ejemplo seria this.modelo = miAuto.modelo


//OBJETOS DE FORMA AUTOMATICA | FUNCION CONSTRUCTORA

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
// Creamos objetos que son una nueva instancia de la funcion auto
var autoNuevo = new auto("Mazda", "CX 30", 2022);

console.log(autoNuevo);
//R/ auto { marca: 'Mazda', modelo: 'CX 30', annio: 2022 }

var autoNuevo2 = new auto("Kia", "Sorento", "2022");
var autoNuevo3 = new auto("Tesla", "Model x", "2021");

console.log(autoNuevo2);
// R/ auto { marca: 'Kia', modelo: 'Sorento', annio: '2022' }

//Asi se pueden generar muchos mas objetos instanciados de la funcion auto