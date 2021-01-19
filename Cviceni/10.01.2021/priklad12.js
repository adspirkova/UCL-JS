// Příklad 

// Napište funkci random, která bude mít vstupní parametry min a max a bude vracet celé číslo v rozmezí min-max (včetně)

function randomFce(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(randomFce(5, 10));
console.log(randomFce(50, 100));