/* Los bucles pueden ejecutar un bloque de código varias veces. JavaScript admite diferentes tipos de bucles:
for/in - recorre las propiedades de un objeto
do/while - también recorre un bloque de código mientras se cumple una condición específica */

//COMO GENERAR CICLOS

//FOR

//for - recorre un bloque de código varias veces

var estudiantes = ["Maria, Sergio, Rosa, Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`hola, ${estudiante}`)
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

//REsultado: hola, Maria, Sergio, Rosa, Daniel 

// FOR OF: for/of - recorre los valores de un objeto iterable

var frutas = ["piña, uva, limon, pera"];

function comerFrutas(fruta){
    console.log(`me comi una, ${fruta}`);
}

for(var fruta of frutas){
    comerFrutas(fruta)
}

//Resultado: me comi una, piña, uva, limon, pera 


//WHILE: recorre un bloque de código mientras se cumple una condición específica

var empleados = ["Andres, Camilo, Andrea, Lucas"];

function saludarEmpleados(empleado){
    console.log(`hola, ${empleado}`);
}

while(empleados.length > 0) {
    var empleado = empleados.shift();
    saludarEmpleados(empleado);
}