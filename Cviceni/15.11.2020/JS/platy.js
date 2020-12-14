// V programu si na začátku definujte neprázdné pole, kde hodnoty jsou jména zaměstnanců (řetězce) a jejich platy (přirozená čísla).
//
// Napište program, který vypíše plat a jméno zaměstnance s nejvyšším platem po provedení následující úpravy mezd.

// Všem zaměstnancům, kteří mají menší než průměrný plat (při jeho výpočtu použijte celočíselné dělení)
// a zároveň jejich jméno začíná na „K“ bude přidáno 10 % z jejich dosavadního platu.

employees = [['Karel', 22000], ['Pavel', 23000], ['Jiri', 24000], ['Klara', 23200]];

function averageSalaryFce(...numberArray) {
    numberArray.map(employee => {
        employee[0][1];
        console.log(employee[0][1]);
        for (let i=0; i < numberArray.length; i++) {
            return numberArray.reduce((a, b) => (a + b)) / numberArray.length;
        }
    })
}

let averageSalary = averageSalaryFce(employees);

function namesStartingWithKFce(names) {
    for (let i=0; i < names.length; i++) {
        let nameWithK = [];
        if (names[i][0][0] === "K") {
            nameWithK.push(names[i][0]);
        }
        return nameWithK;
    }
}

let namesStartingWithK = namesStartingWithKFce(employees);

console.log(averageSalary);
console.log(namesStartingWithK);