/* 

    Voglio generare un array di X numeri casuali con X deciso dall'utente (che mi decide anche l'intervallo)

*/
const x = parseInt(prompt('Inserisci quanti numeri vuoi generare:'));
const randomNumbers = [];

for (let i = 0; i < x; i++) {
    const aNumber = randomNumber(1, x);
    console.log('aNumber', aNumber, typeof aNumber);

    randomNumbers.push(aNumber);
}

console.log('randomNumbers', randomNumbers, typeof randomNumbers);




/* 
    FUNCTIONS
*/
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}