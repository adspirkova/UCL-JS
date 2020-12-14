// PR 1
// Faktorial

let input = Number(prompt("Zadejte cislo"));

if (isNaN(input)) {
    alert("neni cislo");
} else if (!Number.isInteger(input)) {
    alert("nnei cele cislo");
} else if (input < 0) {
    alert("zaporne cislo")
} else {
    let number = parseInt(input);
    let result = 1;

    for (let index = 2; index <= number; index++) {
        result = result * index;
    }

    alert("Vysledek je " + result);
}

// zkus 170