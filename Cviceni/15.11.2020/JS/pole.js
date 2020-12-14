// number
// existuje pole jmen
// prijmeni
// vek nahodne od 18 do 26 let
// udelejte nahodny seznam

const names = ["Le", "Anabel", "Joe"];
const surName = ["Kissner", "Pette", "Wichman"];

function getRandomValue(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function getRandomNumber(max, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomArray() {
    let pole = [];
    names.forEach(element => {
        let person = element + " " + getRandomValue(surName) + " " + getRandomNumber(18,26);
        pole.push(person);
        return pole;
    });

    return pole;
}

// console.log(randomArray());



// dalsi priklad na max value

const input = ['h', 4, 5, 'y', 9, 6, 'j'];

const policko = ['h', 2, 999, 'y', 57, 356, 'j'];

function getMax(array) {
    for (let index = 0; index < array.length; index++) {
        if (isNaN(array[index])){
            continue;
        };
        console.log('index');
        console.log(array[index]);
        if (isNaN(array[index + 1])){
            console.log('index+1')
            console.log(array[index+1]);
            continue;
        } else {
            console.log('index+1')
            console.log(array[index+1]);
            if (array[index] > array[index+1]) {
                console.log(array[index] > array[index+1]);
                return array[index];
            }
        };
        console.log('!!!!!!')
    
    }
}

// console.log(getMax(policko));

function f(array) {
    let maxvalue = 0;
    for (let i=0; i < array.length; i++) {
        if (isNaN(array[i])) {
            continue;
        }
        if(maxvalue < array[i]) {
            maxvalue = array[i];
        }
    }
    return maxvalue;
}
console.log(f(policko));

function searchMax(input) {
    let biggest = 0;
    for (let index = 0; index < input.length; index++) {
        if (isNaN(input[index])) {
            continue;
        }
        if (biggest < input[index])
        biggest = input[index];
    }
    return biggest;
}

console.log(searchMax(policko));