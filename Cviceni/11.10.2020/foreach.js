const pole = [123, 456, 789, "jjdj", "cdvd"];


function vypisPrvek(prvek) {
console.log(prvek)
}
pole.forEach(vypisPrvek);
console.log("/////////");

pole.forEach(console.log);
console.log("/////////");

const hodnoty = [123, 456, 789, "jjdj", "cdvd"];


function forEach(pole, callback) {
    for (let index = 0; index < pole.length; index++) {
        callback(pole[index], index, pole);
    }
}

forEach(hodnoty, prvek => console.log(prvek));
forEach(hodnoty, (prvek, index) => console.log(`na indexu ${index} v pole je prvek s hodnotou ${prvek}`));


