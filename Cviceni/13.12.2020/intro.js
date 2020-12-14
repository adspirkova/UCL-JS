const pole = [1,2,30];

function forEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        callback(pole[index])
    }
}

forEach(pole, prvek => {
    // console.log(prvek)
})

const pole2 = pole.map(item => item * 2);

//console.log(pole2);

// Příklad 1

// - napište vlastní funkci map()

// - vstupní parametry: pole a funkce pro transformaci prvku

// - vrací transformované pole (původní pole zůstane netknuté)

// test: map([1, 2, 3], item => item ** 2) -> [1, 4, 9]

// bonus: zkuste si napsat i funkci filter
const pole3 = [1,2,30, 40, 12, 13, 9, 3, 100];

function mapElement(array, callback) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        newArray.push(callback(array[index]));
    }
    return newArray;
}

//console.log(mapElement(pole3, prvek => prvek ** 2))

//console.log(pole3.filter(prvek => prvek > 10));


//console.log(pole3.find(prvek => prvek > 10));

console.log(pole3.sort((itemA, itemB) =>itemA - itemB));