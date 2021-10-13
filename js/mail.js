/* TRACCIA

Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

*/

// creare lista mail degli utenti che possono accedere
const listaUtenti = ["davide@gmail.com", "fabrizio@gmail.com", "bea@gmail.com"];

// chiedere all'utente la sua mail
var emailUtente = prompt("Inserisci la tua mail per verificare l'accesso");
console.log(emailUtente);

// controllare se la mail dell'utente sia presente nella lista delle mail

let emailEsistente = false;

for(i = 0; i < listaUtenti.length; i++){

    const utente = listaUtenti[i]

    // listaUtenti[0] = davide@gmail.com
    // listaUtenti[1] = fabrizio@gmail.com
    // listaUtenti[2] = bea@gmail.com

    console.log(emailEsistente) 

    if( emailUtente.toLowerCase === utente.toLowerCase){
        emailEsistente = true;
    }
    
    // console.log(emailEsistente) 

}

// stampare messaggio in base all'esito della verifica

if (emailEsistente){
    console.log("La sua mail è presente nella nostra lista. Può proseguire.");
} else{
    console.log("Siamo spiacenti, la sua mail non è presente nella nostra lista.");
}