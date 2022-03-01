// Esercizio parola palindroma

const check = document.getElementById('check');
const win = document.getElementById('win');

/*
const wordUser = prompt('Inserisci una parola:');
let wordReverseUser = wordReverse(wordUser);

function wordReverse (n) {
    return n.split('').reverse().join('');
}

if (wordUser == wordReverseUser) {
    check.innerHTML = 'La parola è palindroma';
} else {
    check.innerHTML = 'La parola non è palindroma';
}
*/





// Esercizio pari e dispari 


let oddOrEven = prompt('Giochiamo a pari o dispari');
let numberUser = parseInt(prompt('Scegli un numero da 1 a 5:'));
const randomNum = numberRandom(1, 5);

let sum = numberUser + randomNum;

function numberRandom (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function numberEven(numberE) {
    if (numberE % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

if (numberEven(sum)) {
    check.innerHTML = `${numberUser  + ' + ' + randomNum + ' = ' + sum + ' '} Il numero è pari.`;
} else {
    check.innerHTML = `${numberUser  + ' + ' + randomNum + ' = ' + sum + ' '} Il numero è dispari.`
}

if (oddOrEven == numberEven(sum)) {
    win.innerHTML = 'hai vinto!'
} else {
    win.innerHTML = 'Hai perso!'
}

