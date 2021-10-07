var jugadaU = prompt("Elige entre piedra, papel o tijera: ");

while (jugadaU != "piedra" && jugadaU != "papel" && jugadaU != "tijera") {
    var jugadaU = prompt("Elige entre piedra, papel o tijera: ");
};

var jugadaC = Math.floor(Math.random() * 3) + 1;

if (jugadaC == 1) {
    jugadaC = "piedra";
} else if (jugadaC == 2) {
    jugadaC ="tijera";
} else {
    jugadaC ="papel"
};

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

document.write("Tu jugada ha sido " + jugadaU +"<br>");
document.write("Tu oponente ha jugado " + jugadaC +"<br>");
document.write(resultado(jugadaU, jugadaC));
