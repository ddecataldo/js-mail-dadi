/* TRACCIA

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/

// Genero un numero random per il giocatore
const numeroGiocatore = Math.round((Math.random() * 6) + 1);
console.log(numeroGiocatore);

// Genero un numero random per il computer
const numeroComputer = Math.round((Math.random() * 6) + 1);
console.log(numeroComputer);

// Confronto chi fra il giocatore e il computer ha il punteggio più alto e stampo un messaggio con il vincitore
if(numeroGiocatore > numeroComputer){
    console.log("Complimenti, il giocatore ha vinto. Il numero uscito è " + numeroGiocatore + " contro il numero " + numeroComputer + " del computer.");
} else if (numeroGiocatore === numeroComputer) {
    console.log("Pareggio. Il numero uscito è " + numeroGiocatore + " contro il numero " + numeroComputer + " del computer.");
} else {
    console.log("Mi dispiace, il computer ha vinto. Il numero uscito è " + numeroGiocatore + " contro il numero " + numeroComputer + " del computer.");
}
