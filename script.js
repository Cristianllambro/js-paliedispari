// Esercizio parola palindroma

/*
const check = document.getElementById('check');
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


let oddOrEven = prompt('Scegli pari o dispari:');
let numberUser = parseInt(prompt('Scegli un numero da 1 a 5:'));
const randomNum = numberRandom(1, 5);

let sum = numberUser + randomNum;
console.log(numberUser)

function numberRandom (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomNum)

function numberEven(numberE) {
    if (numberE % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(numberEven)

if (numberEven(sum)) {
    check.innerHTML = 'La somma del tuo numero e la somma del numero del computer è pari';
} else {
    check.innerHTML = 'La somma del tuo numero e la somma del numero del computer è dispari';
}

