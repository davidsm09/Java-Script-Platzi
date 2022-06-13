//FUNCIONES

// declarativas 

function miFuncion() {
    return 3;  //tarea o calculo que va a realizar nuestra funcion
} 
 //de esta manera queda declarada una fncion

 miFuncion //se invoca la funcion declarando su nombre

//expresión

var miFuncion = function(a,b) {
    return a + b;
}

miFuncion(); //Queda generada una funcion de expresión


//funciones mas complejas

function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`);
}

saludarEstudiantes("David");

//Return nos devuelve informacion sin nesecidad de un cosole.log

function sumar(a,b) {
    var resultado = a + b;
    return resultado;
}

sumar(1,2);


//Scope


var miNombre = "David"; 
//Scope global se inicia cuando iniciamos un archivo .js

function nombre() {
    var miApellido = "Mesa";
    console.log(miNombre + " " + miApellido);
    //Scope local se inicia cuando ejecutamos una funcion
}

nombre();

/* desde el Scope global podemos acceder a informacion global
pero no podemos acceder a informacion local.
En cambio desde el Scope local si podemos accerder 
a informacion del Scope global. 
es decir desde una funcion podremos utilizar informacion que halla fuera de ella */
