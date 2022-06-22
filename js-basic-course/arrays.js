//ARRAYS, estructura de datos tipo objeto

var frutas = ["Manzana", "Banana", "Cereza", "Fresa"];

//console.log(frutas.length); ver longitud

//console.log(frutas[2]); acceder a un elemento del array en especifico

//Metodos

var masFrutas = frutas.push("Uvas"); //Push: Agrega un elemento al final del array

var ultimo = frutas.pop("Uvas");//pop: quitamos el ultimo elemento

var inicio = frutas.unshift("Uvas");//Agrega un elemenmto al inicio del array

var inicioF = frutas.shift("Uvas");//Nos quita el primer elemento

var posicion = frutas.indexOf("Cereza")//nos busca la posicion de un elemento en especifico

//Arrays de Objetos

var articulos =[
    { nombre: "bici", costo: "3000"},
    { nombre: "tv", costo: "2500"},
    { nombre: "libro", costo: "320"},
    { nombre: "celular", costo: "10000"},
    { nombre: "laptop", costo: "20000"},
    { nombre: "teclado", costo: "500"},
    { nombre: "audifonos", costo: "1700"},
];

// Metodos Para recorrer Arrays de Objetos


//Filter Nos trae la informacion filtrada de lo que queramos especificamente
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});
console.log(articulosFiltrados);
//  R/[ { nombre: 'libro', costo: '320' },
  //{ nombre: 'teclado', costo: '500' } ]



// MAP  mapear cierta informacion

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});
console.log(nombreArticulos);
//Respuesta mapea todo el contenido del array y nos trae lo que nosotros le pedimos que en este caso son los nombres
 /*[ 'bici',
     'tv',
     'libro',
     'celular',
     'Laptop',
     'teclado',
     'audifonos' 
    ] */

    // Metodo FIND nos ayuda a encontrar algo dentro del articulo
// valida True y False

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "laptop"
});
console.log(encuentraArticulo);
//  R/ { nombre: 'laptop', costo: '20000' }

/* Aqui le estamos diciendo a la funcion que nos busque
el articulo laptop dentro de todos los articulos que tiene
y si no lo encuentra que no nos regrese nada*/

//Metodo ForEach

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})


//Metodo Some

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
console.log(articulosBaratos); // R/ True
//este metodo nos valida si la condicion se cumple o no

