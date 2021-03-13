let {names, surnames} = require('./uloha1_cz_names.js');

let genderOptions = {
    0: 'female',
    1: 'male',
}

let workloadOptions = {
    10: 10,
    20: 20,
    30: 30,
    40: 40
}

let employee = {
    name: '',
    surname: '',
    gender: genderOptions,
    birthday: '',
    workload: workloadOptions[10],
}

let age = {
    min: 15,
    max: 80,
}

function getRandomNumber(max) {
    let randomNumber = Math.floor(Math.random() * Math.floor(max));

    return randomNumber;
}

function getRandomBirtdayDate(age) {
    let currentYear = new Date().getFullYear();
    let birthYearMin =  currentYear - age.min;
    let birthYearMax =  currentYear - age.max;
    let currentMonth = new Date().getMonth();
    let currentDay = new Date().getDate();
    return new Date(new Date(birthYearMin, currentMonth, currentDay).getTime() + Math.random() * (new Date(birthYearMax, currentMonth, currentDay).getTime() - new Date(birthYearMin, currentMonth, currentDay).getTime()));
}

function getRandomEmployeesList(count, age) {
    let employeesList = [];
    let employee = {};

    for (let index = 0; index < count; index++) {
        let name = names[getRandomNumber(names.length)];
        let surname = surnames[getRandomNumber(surnames.length)];
        let gender = genderOptions[getRandomNumber(2)];
        let birthday = getRandomBirtdayDate(age);
        let workload = workloadOptions[(getRandomNumber(4) + 1)*10];
        employee.name = name;
        employee.surname = surname;
        employee.gender = gender;
        employee.birthday = birthday;
        employee.workload = workload;
        employeesList.push(employee);
        employee = {};
    }

    return employeesList;
}

console.log(getRandomEmployeesList(20, age));