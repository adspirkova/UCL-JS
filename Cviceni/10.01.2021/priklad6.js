// Příklad 

// 1) Nechte uživatele zadávat čísla, dokud ho to baví (až nezadá nic, ukončete cyklus; pozor na 0, to je platné číslo)

// 2) Spočítejte a vypište aritmetický průměr zadaných hodnot

// 3) Hodnoty vyšší než 1000 vynechejte z výpočtu průměru

let number;
let sum = 0;
let count = 0;
let avg

do {
    number = parseInt(prompt("Zadejte cislo"));
    isNumber = !isNaN(number)
    if (number <= 1000) {
        count++;
        sum += number;
        avg = sum / count;
    }
} while (isNumber);

alert(avg);