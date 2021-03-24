//1. chiedi all’utente il cognome
//2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
//3. stampa la lista ordinata alfabeticamente
//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova (facciamo questo in 2 versioni: col ciclo for e col while)

//chiedo all’utente il cognome
var cognomeUtente = prompt ('Inserisci il tuo cognome');
console.log(cognomeUtente);

//array con altri cognomi
var arrayCognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
//console.log(arrayCognomi);

//inserisco il cognome nella lista
arrayCognomi.push(cognomeUtente);
//console.log(arrayCognomi);

//stampo la lista di cognomi in ordine alfabetico for
arrayCognomi.sort();
console.log(arrayCognomi);

for ( var i = 0; i < arrayCognomi.length; i++ ) {

    if (arrayCognomi[i] == cognomeUtente) {
        var cognomeUtentePosizione = i + 1;
    }
}

alert("Il tuo cognome nella lista è nella posizione numero " + cognomeUtentePosizione );

//stampo la lista di cognomi in ordine alfabetico while
//var i = 0;

//while ( i < arrayCognomi.length ) {

//    if (arrayCognomi[i] == cognomeUtente) {
//        var cognomeUtentePosizione = i + 1;
//    }

//    i++;
//}

//alert("Il tuo cognome nella lista è nella posizione numero " + cognomeUtentePosizione );
