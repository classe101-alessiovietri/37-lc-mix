/* 

    Voglio generare un array di X numeri casuali con X deciso dall'utente (che mi decide anche l'intervallo)
    I numeri nell'array devono essere TUTTI diversi (non ci devono essere numeri ripetuti nell'array)

    COME CARLO, MA CON IL FOR

*/
const x = parseInt(prompt('Inserisci quanti numeri vuoi generare:'));
const randomNumbers = [];

// let quanteVolteHoEseguitoIlWhile = 0;

for (let i = 0; i < x; i++) {
    const aNumber = uniqueRandomNumber(x, randomNumbers);
    if (aNumber != null) {
        randomNumbers.push(aNumber);
    }
}

// while (randomNumbers.length < x) {
//     const aNumber = randomNumber(1, x);
//     console.log('aNumber', aNumber, typeof aNumber);

//     if (!randomNumbers.includes(aNumber)) {
//         randomNumbers.push(aNumber);
//     }

//     quanteVolteHoEseguitoIlWhile++;
// }

console.log('randomNumbers', randomNumbers, typeof randomNumbers);
// console.log('Per riempire l\'array ci sono volute', quanteVolteHoEseguitoIlWhile, 'esecuzioni');



/* 
    FUNCTIONS
*/
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function uniqueRandomNumber(max, arr) {
    if (max == arr.length) {
        return null;
    }

    let aNumber = randomNumber(1, max);

    while (arr.includes(aNumber)) {
        aNumber = randomNumber(1, max);
    }

    // let aNumber = null;
    // do {
    //     aNumber = randomNumber(1, max);
    // } while (arr.includes(aNumber));

    return aNumber;
}