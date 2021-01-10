let x = [1, 2, 40, -10, 22, -1, 0, 11];
let y = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Vytvorte funkci, ktera hleda prvocisla v ramci pole

function getPrimeNumber(array) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        if (isPrimeNumber(array[index])) {
            newArray.push(array[index]);
        }
    }
    return newArray;
}  

function isPrimeNumber(number) {
    let isPrime = true;

    for (let index = 2; index <= number/2; index++) {
        if (number % index === 0) {
            isPrime = false;
            break
        }
    }
    return isPrime;
} 

console.log(getPrimeNumber(y))