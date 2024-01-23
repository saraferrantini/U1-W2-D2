/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const num1 = 4;
const num2 = 2;

if (num1 > num2) {
  console.log("Il numero uno è più grande del numero due");
} else if (num1 === num2) {
  console.log("Il numero uno è uguale al numero due");
} else if (num1 < num2) {
  console.log("Il numero uno è più piccolo del numero due");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let num = 4;

if (num !== 5) {
  console.log("Not equal");
} else {
  console.log("Equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

const numDivis = 10;

if (numDivis % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non è divisibile per cinque");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let pr = 10;
let pe = 8;

if (pr === 8) {
  console.log("il valore pr è uguale a otto");
} else if (pe === 8) {
  console.log("il valore pe è uguale a otto");
} else if (pr + pe === 8) {
  console.log("la somma è pari a otto");
} else if (pr - pe === 8 || pe - pr === 8) {
  console.log("la sottrazione è pari a otto");
} else {
  console.log("il valore pr e pe è  diverso da otto");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 49;
if (totalShoppingCart > 50) {
  console.log("spedizione gratuita");
  console.log("totale da pagare:", totalShoppingCart);
} else {
  totalShoppingCart = totalShoppingCart + 10;
  console.log("costo spedizione di dieci euro");
  console.log("totale da pagare:", totalShoppingCart);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

totalShoppingCart = 49;
totalShoppingCart = totalShoppingCart - 0.2 * totalShoppingCart;
// il 20% di 49 equivale a scrivere 0.2 * 49. A questo punto devo sottrarre questo sconto al prezzo iniziale
// (49 euro). QUindi prendo i 49 euro e gli levo il suo 20%. A questo punto riassegno la variabile ai 49
// euro meno il suo 20%
if (totalShoppingCart > 50) {
  console.log("spedizione gratuita");
  console.log("totale da pagare:", totalShoppingCart);
} else {
  totalShoppingCart = totalShoppingCart + 10;
  console.log("costo spedizione di dieci euro");
  console.log("totale da pagare:", totalShoppingCart);
}

// sui 49 euro totali ci applico lo sconto del 20%

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let a = 5;
let b = 12;
let c = 8;

if (a >= b && a >= c && b >= c) {
  console.log("Ordine decrescente:", a, b, c);
} else if (b >= a && b >= c && a >= c) {
  console.log("Ordine decrescente:", b, a, c);
} else if (a >= c && a >= b && c >= b) {
  console.log("Ordine decrescente:", a, c, b);
} else if (b >= a && b >= c && c >= a) {
  console.log("Ordine decrescente:", b, c, a);
} else if (c >= b && c >= a && b >= a) {
  console.log("Ordine decrescente:", c, b, a);
} else if (c >= a && c >= b && a >= b) {
  console.log("Ordine decrescente:", c, a, b);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

num = 2;
if (typeof num === "number") {
  console.log("è un numero");
} else {
  console.log("non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

num = 3;
if (num % 2 === 0) {
  console.log("questo numero è pari");
} else {
  console.log("questo numero è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 2;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

// abbiamo una variabile che corrisponde a quattro. Nel codice originale essendo minoredi dieci la prima condizione rispetto
// a minore di cinque, il flusso logico non sarebbe entrato nella condizione di cinque. Quindi per ovviare a questo, devi mettere prima
// la condizione minore di cinque e poi quella di dieci.

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

// Crearo un array vuoto
numeri = [];

// Riempio l'array con i numeri da 1 a 10
for (let i = 1; i <= 10; i++) {
  numeri.push(i);
}

// ho un array vuoto, poi gli attrtibuisco dei numeri da 1 a 10. Prendi una variabile(i) e gli attribuisci
// il numero=1 . Dopo verifichi che sia <= a 10, poi la pusha nella (i). PEr farlo proseguire anche con 2,3,4,5,6,7,8,9,10 metti i++

// Stampare l'array risultante
console.log(numeri);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeri[numeri.length - 1] = 100;
console.log(numeri);
