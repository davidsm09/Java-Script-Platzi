// CONDICIONALES

//son reglas de validacion si algo es verdadero o falso realiza ciertas tareas o no

//if.valid si la condicion se cumple si y solamente si es verdadera

if (true) {
    //si la condicion es verdadera la tarea dentro de las llaves se cumple
}

//else. valida si la condicion es falsa entonces realiza esta otra tarea


if (false) {
    //como if es falso no se realiza esta tarea
}
else {
    //Si if es falso entonces realiza esta tarea
}

/*else if. nos sirve para validar mas de un valor, si if es falso 
entonces pasamos a validar else if y si esta tambien es falsa entonces 
pasariamos al else*/

var edad = 18;

if(edad === 18) {
    console.log("Puedes votar, sera tu primera votacion");
}

else if (edad > 18) {
    console.log("puedes votar de nuevo");
}

else {
    console.log("aun no puedes votar");
}

//En este caso se cumpliria la primera condicion
// el else if se puede utilizar multiples veces si nesecitas validar multiples valores

//OPERADOR TERNARIO "?": genera if y else en una sola linea

var numero = 1;
//Condicion     si esto es true  imprime esto  si no imprime esto
var resultado = numero === 1 ? "si soy un uno" : "no, no soy un uno";
//                                  if                   else
console.log(resultado)


//RETO DE JUEGO DE PIEDRA PAPEL O TIJERA

var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === op1 && cpu === op3){
            console.log("el usuario GANO con "+ op1)
        }else if(user === op2 && cpu === op1){
            console.log( "el usuario GANO con " + op2)
        }else if(user === op3 && cpu === op2){
            console.log("el usuario GANO con " + op3)
        }else{
            console.log("La CPU Gano!!")
        }
    }else if(user === cpu){
        console.log("Empate")
    }
}





