// V programu si na začátku definujte neprázdné pole, kde hodnoty jsou jména zaměstnanců (řetězce) a jejich platy (přirozená čísla).
//
// Napište program, který vypíše plat a jméno zaměstnance s nejvyšším platem po provedení následující úpravy mezd.

// Všem zaměstnancům, kteří mají menší než průměrný plat (při jeho výpočtu použijte celočíselné dělení)
// a zároveň jejich jméno začíná na „K“ bude přidáno 10 % z jejich dosavadního platu.


employees = [['Karel', 22000], ['Pavel', 23000], ['Jiri', 24000], ['Klara', 23200], ['Kamila', 21000]];

function getAverageSalary(array) {
    let averageSalary = [];
    for (let index = 0; index < array.length; index++) {
        averageSalary.push(array[index][1]);
    }
    averageSalary = Math.floor(averageSalary.reduce((a, b) => a + b) / averageSalary.length);
    
    return averageSalary;
}

function nameStartsWithK(array) {
    let firstNamesWithKs = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index][0][0] === "K" || array[index][0][0] === "k") 
            firstNamesWithKs.push(array[index]);
    }
    
    return firstNamesWithKs;
}

function checkifSalaryIsBelowAverage(array, average) {
    let employeesBelowAverage = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index][1] < average) 
        employeesBelowAverage.push(array[index]);
    }
    return employeesBelowAverage;
}

function addTenPercent(array) {
    let newSalaries = [];
    for (let index = 0; index < array.length; index++) {
        array[index][1] = Math.floor(array[index][1] * 1.1);
        newSalaries.push(array[index]);
    }
    return newSalaries;
}

function getHighestSalary(array) {
    let biggest = ["name", 0];
    for (let index = 0; index < array.length; index++) {
        if (biggest[1] < array[index][1])
        biggest = array[index];
    }
    return biggest;
}

function highestSalary(array) {
    const theOneWithHighestSalaryBeforeChanges = getHighestSalary(array);
    let averageSalary = getAverageSalary(array);
    let firstNamesWithKs = nameStartsWithK(array);
    let employeesBelowAverage = checkifSalaryIsBelowAverage(firstNamesWithKs, averageSalary);
    let employeesWithExtraTenPersent = addTenPercent(employeesBelowAverage);
    let theOneWithHighestSalaryAfterChanges = getHighestSalary(employeesWithExtraTenPersent);
    
    let highestPaidEmployee = theOneWithHighestSalaryBeforeChanges > theOneWithHighestSalaryAfterChanges ? theOneWithHighestSalaryBeforeChanges : theOneWithHighestSalaryAfterChanges;
    
    return highestPaidEmployee;
}

console.log(highestSalary(employees));

// console.log(employees);
// console.log(getHighestSalary(employees));