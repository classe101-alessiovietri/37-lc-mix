/* 

    Voglio generare un array di X numeri casuali
    1) Imposto la X (cioè quanti numeri devo generare)
    2) Dichiaro un array che ospiterà i miei numeri random
    3) Ciclo fino a X
        - Per ogni iterazione, genero un numero
        - Questo numero lo metto in un array
    4) Stampo l'array

*/
const x = 10;
const randomNumbers = [];

for (let i = 0; i < x; i++) {
    const aNumber = randomNumber(1, 10);
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