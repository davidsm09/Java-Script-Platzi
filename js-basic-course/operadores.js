//OPERADORES: Asignacion, Comparacion, Aritmeticos

//Aritmeticos, binarios o de operacion

3 + 2  //suma
50 - 10 //resta
3 * 8 //multiplicacion
5 / 2 //division

//estos operadores tambien se pueden utilizar con strings

3 + "David"
"David" + "Apellido"

//con el caracter "!" negamos, este es un operador unitario trabaja con un operador y un valor 

!false
//en este caso este false es true ya que con el "!" estamos negando que sea false


//ASIGNACION

var a = 1; //el operador "=" nos ayuda a asignar valores

//COMPARACION

3 == "3"; // "==" nos permite comparar valores nos compara en este caso el valor y no el tipo de valor

3 === "3"; // "===" nos compara tanto el valor como el tipo de valor

5 < 3; false //"<" nos compara si un valor es menor que el otro

5 > 3; true // ">" nos compara si un valor es mayor que el otro

5 <= 6; true
/*"<=" nos compara si un valor es menor o igual a otro
">=" nos compara si un valor es mayor o igual a otro Son considerados 
validaciones en dos pasos si uno de las dos validaciones se cumplen es verdadero
de lo contrario es falso*/
5 >= 6; false 

a && b //nos compara si ambos valores son verdaderos de lo contrario no se cumple la condicion

a || b //nos compara si ambas o uno de los dos valores es verdadero se cumple la condicion


var edad = 40

edad++ //"++" nos permite incrementar valores por 1 en este caso edad = 41

edad += 40 //"+=" incrementa por 2. "edad = 43"

