/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

/*
let parola = prompt("scrivi qui una parola, ti dirò se è palindroma");

let parolaSpread = [...parola];
console.log(parolaSpread);

let parolaReverse = parolaSpread.reverse();
console.log(parolaReverse);

let parolaFinale = parolaReverse.join('');
console.log(parolaFinale);

const divParola = document.querySelector('.parola')

if (parola == parolaFinale){
    console.log('la parola è palindroma!')
    divParola.innerHTML = 'La parola è palindroma!'
}
else{
    console.log('la parola non è palindroma')
    divParola.innerHTML = 'La parola non è palindroma!'
}
*/


// alternativa con function
/*
let parola = prompt("scrivi qui una parola, ti dirò se è palindroma");
const divParola = document.querySelector('.parola')

if (palindroma (parola)){
    console.log('la parola è palindroma!')
    divParola.innerHTML = 'La parola è palindroma!'
}
else{
    console.log('la parola non è palindroma')
    divParola.innerHTML = 'La parola non è palindroma!'
}

function palindroma (parola){
    let parolaReverse='';
    for(let i = 0; i < parola.length; i++){
        parolaReverse = parola[i] + parolaReverse;
    }
    
    if(parola == parolaReverse){
        return true;
    }
    else{
        return false;
    }
}
*/



/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// memorizzare la scelta del Btn 
// utente sceglie numero da 1 a 5 con prompt
//     memorizzare la scelta
// computer sceglie numero random da 1 a 5
//     memorizzare la scelta
// sommare i due numeri 
// numero pari o dispari?


// const btnPari = document.querySelector('.btn-pari');
// const btnDispari = document.querySelector('.btn-dispari');

// btnPari.onclick = function(){
//     alert('hai scelto Pari')
// }

// btnDispari.onclick = function(){
//     alert('hai scelto Dispari')
// }

const pariOdispari = prompt('Scegli: pari o dispari?').toLowerCase();
const numeroUtente = parseInt(prompt('dimmi un numero da 1 a 5'));
const numeroRandom = functionNumeroRandom(1, 5);
const somma = numeroUtente + numeroRandom;

console.log('hai scelto ' + (numeroUtente));
console.log('il computer ha scelto ' + (numeroRandom));
console.log(somma);

if (pari (somma)){
    result="pari";
}
else{
    result="dispari";
}

if(pariOdispari == result){
    console.log('hai vinto')
}
else{
    console.log('hai perso')
}



function functionNumeroRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function pari(numero){
    if (numero % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}


