// Příklad 

// Vypište vstupní pole hodnot v opačném pořadí

// 2 varianty

const array = [123, 456, "ahoj", "cokoliv"];

//1.
console.log(array.reverse());


//2.
for (let index = array.length - 1; index > -1; index--) {
    console.log(array[index]);
}
