// Příklad 

// 1) Nechte uživatele zadávat čísla, dokud ho to baví (až nezadá nic, ukončete cyklus; pozor na 0, to je platné číslo)

// 2) Spočítejte a vypište aritmetický průměr zadaných hodnot

// 3) Hodnoty vyšší než 1000 vynechejte z výpočtu průměru

let number;
let sum = [];

do {
    number = Number(prompt("Zadejte cislo"));
    sum.push(number);
    console.log(number);
    console.log(sum);
} while (number !== "") {
    number = Number(prompt("Zadejte cislo"));
    sum.push(number);
    console.log(number);
    console.log(sum);
};


//reseni
// let count = 0

// let sum = 0



// let isNumber

// do

// {​​

//   const number = parseFloat(prompt())

//   isNumber = !isNaN(number)



//   if (number > 1000)

//     continue;



//   if (isNumber /* && number <= 1000 */) // zakomentovaná je tady varianta, kterou bychom mohli použít místo podmínky s continue výše

//   {​​

//     sum += number

//     count++

//   }​​

// }​​

// while (isNumber)



// if (count > 0)

// {​​

//   const average = sum / count

//   alert("Průměr zadaných hodnot: " + average)

// }​​