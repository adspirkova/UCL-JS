// Příklad 4

// 1) Nechte uživatele zadat rok

// 2) Nechte uživatele zadat měsíc (číslem nebo textem, jak chcete)

// 3) Vraťte počet dní v měsíci

let inputYear = Number(prompt("Zadejte rok"));
let inputMonth = Number(prompt("Zadejte mesic"));

let daysInAMonth = new Date(inputYear,inputMonth, 0).getDate();

alert(daysInAMonth);

