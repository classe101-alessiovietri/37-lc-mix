/* 

    Voglio generare una griglia di X celle (con X deciso dall'utente)

*/
const x = parseInt(prompt('Inserisci quante celle vuoi generare:'));

const gridContainer = document.querySelector('.grid-container');
for (let i = 1; i <= x; i++) {
    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    newCell.append(i);

    gridContainer.append(newCell);
}