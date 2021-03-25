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
console.log(arrayCognomi);

//ordine alfabetico 
arrayCognomi.sort();
console.log(arrayCognomi);

//stampo la lista di cognomi in ordine alfabetico 
for ( var i = 0; i < arrayCognomi.length; i++ ) {
    var cognomeAttuale = arrayCognomi[i]
    var contenutoAttualeUl = document.getElementById('lista-cognomi').innerHTML
    document.getElementById('lista-cognomi').innerHTML = contenutoAttualeUl + '<li>' + cognomeAttuale + '</li>';
}

//for
//var cognomeUtentePosizione = -1;

//for ( var i = 0; i < arrayCognomi.length; i++ ) {
//    var cognomeAttuale = arrayCognomi[i]

//    if (cognomeAttuale == cognomeUtente) {
//        var cognomeUtentePosizione = i + 1;
//    }
//}

//document.getElementById('posizione').innerHTML = "Il tuo cognome nella lista è nella posizione numero " + cognomeUtentePosizione;

//alert("Il tuo cognome nella lista è nella posizione numero " + cognomeUtentePosizione );

//while
var cognomeUtentePosizione = -1;

var i = 0;

while ( i < arrayCognomi.length ) {
    var cognomeAttuale = arrayCognomi[i]

    if (cognomeAttuale == cognomeUtente) {
        var cognomeUtentePosizione = i + 1;
    }

    i++;
}

document.getElementById('posizione').innerHTML = "Il tuo cognome nella lista è nella posizione numero " + cognomeUtentePosizione;

//alert("Il tuo cognome nella lista è nella posizione numero " + cognomeUtentePosizione );
