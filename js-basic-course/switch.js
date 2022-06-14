//SWITCH nos sirve para validar funciona por casos

var numero = 1;

switch (numero) {
    case 1:
        console.log("soy uno");
        break;

    case 10:
        console.log("soy un 10");
        break;

    case 100:
        console.log("soy un 100");
        break;
    
    default:
        console.log("no soy nada");
}
//en este caso seria el caso 1. si no se valida ninguno de los casos toma el
//el default que en este caso seria como un else

//reto de P P o T con swit 

var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

function juego(jugador1, jugador2) {
    switch (true) {
        case (jugador1 === piedra && jugador2 === papel):
            console.log("Gana jugador2 con " + papel);
            break
        case (jugador1 === piedra && jugador2 === tijera):
            console.log("Gana jugador1 con " + piedra);
            break
        case (jugador1 === papel && jugador2 === piedra):
            console.log("Gana jugador1 con " + papel);
            break
        case (jugador1 === papel && jugador2 === tijera):
            console.log("Gana jugador2 con " + tijera);
            break
        case (jugador1 === tijera && jugador2 === papel):
            console.log("Gana jugador1 con " + tijera);
            break
        case (jugador1 === tijera && jugador2 === piedra):
            console.log("Gana jugador2 con " + piedra);
            break 
        default:
            console.log("Empate");
    }
}

juego(papel, papel); {
    console.log(juego)
}
