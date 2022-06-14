/* Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:
Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
Coerción explicita = es cuando obligamos a que cambie el tipo de valor. */

//Coercion implicita

var a = 4 + "7"; 
/*resultado es: 47 
aqui vemos que el mismo lenguaje implicitamente concatena 
estos dos valores pero el valor 4 que es de tipo numero lo
convierte en un string*/

var b = 4 * "7";
/*resultado es: 28
en este caso vemos como la coercion implisita de JS nos permite realizar
la operacion de multiplicar ya que el 7(string) lo covierte en tipo
numero
*/

//Coercion Explicita

var c = 20;
var d = c + "";
/* En este caso el resultado de d seria "20" ya que al concatenar
un valor tipo numero (c = 20) con un string(d = c + "") obligamos
a la var c a convertirce en un string */

var d = String(c);
/* con el metodo String utilizado en esta var oblogamos a c que es numero
a convertirce en string */


var e = Number(d);
/* con el metodo Number obligamos a un valor String a convertirce 
en un valor tipo numero */