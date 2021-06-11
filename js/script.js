/*Consegna Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente per (100 - 16) 
volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, 
la partita termina, altrimenti si continua chiedendo 
all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero 
“vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, 
cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto) all’inizio 
il software richiede anche una difficoltà all’utente 
che cambia il range di numeri casuali: con difficoltà 
0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50*/

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


var computerNums = [];
while (computerNums.length < 16) {
    // generiamo un numero random
    var RandomNum = getRandomNumber(1, 100);
    // verifichiamo che non sia duplicato
    if (!computerNums.includes(RandomNum)) {
         // pushiamo nell'array se non è doplicato
         computerNums.push(RandomNum);
    }
}

console.log('numeri generati dal computer', computerNums);

var userNums = []; //la lunghezza di questo array sarà il nostro score.
var gameOver = false;

while (userNums.length < 84) {
    // l'utente seleziona un numero 
    var selectedNum = parseInt(prompt('inserisci un numero da 1 a 100'));
    // todo: e se inserisce un numero maggiore di 100 o minore di 1?
    // todo: e se inserisce un NaN?
    if (!selectedNum.includes(selectedNum)) {
        if (computerNums.includes(selectedNum)) {
            alert ('mina beccata!')
            gameOver = true;
            break;
        } else {
            userNums.push(selectedNum);
            console.log('[USER] numeri inseriti dall\'utente', userNums)
        }
    } else {
        alert('numero duplicato. Riprova')
    }
}

if (!gameOver) {
    alert('HAI VINTO!');
} else {
    alert('HAI PERSO!');
}

alert('il tuo punteggio è: ' + userNums.length);

