//Se inicia el juego declarando en 0 el numero de juegos y luego se solicita ingresar la cantidad a jugar.
var partidas = 0;

do {
    var partidas = prompt("¿Cuantas veces quieres jugar?");
    var partidas = parseInt(partidas);
}

while (isNaN(partidas) || partidas < 0) 

//El juego en si, repitiendose segun la cantidad de veces señaladas.
for (let i = 0; i < partidas; i++) {

    //Solicitar al usuario su jugada.
    var jugadaU = prompt("Elige entre piedra, papel o tijera: ");

    //En caso de error de ingreso
    while (jugadaU != "piedra" && jugadaU != "papel" && jugadaU != "tijera") {
        var jugadaU = prompt("Solo con minusculas, elige entre piedra, papel o tijera: ");
    };

    //Declaracion de la jugada de la consola.
    var jugadaC = Math.floor(Math.random() * 3) + 1;

    if (jugadaC == 1) {
        jugadaC = "piedra";
    } else if (jugadaC == 2) {
        jugadaC ="tijera";
    } else {
        jugadaC ="papel"
    };

    //Se comparan ambas jugadas.
    var resultado = function (jugadaU, jugadaC) {
        if (jugadaU === jugadaC) {
            return "Haz empatado con la consola";
        };
        if (jugadaU === "piedra") {
            if (jugadaC === "tijera") {
                return "Ha ganado el usuario.";
            } else {
                return "Ha ganado la consola.";
            }
        };
        if (jugadaU === "papel") {
            if (jugadaC === "piedra") {
                return "Ha ganado el usuario.";
            } else {
                return "Ha ganado la consola.";
            }
        };
        if (jugadaU === "tijera") {
            if (jugadaC === "piedra") {
                return "Ha ganado la consola.";
            } else {
                return "Ha ganado el usuario.";
            }
        };
    };

    //Se despliega el resumen del juego.
    alert("Tu jugada ha sido " + jugadaU + " y tu oponente ha jugado " + jugadaC + ". " + resultado(jugadaU, jugadaC));
}
