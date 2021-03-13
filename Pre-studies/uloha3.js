let employeeList = require('./uloha2_list');
//1. rozlozeni pracovnich uvazku formou kolacoveho grafu

let workload10 = 0;
let workload20 = 0;
let workload30 = 0;
let workload40 = 0;

for (let index = 0; index < employeeList.length; index++) {
    const workload = employeeList[index].workload;
    switch (workload) {
        case 10:
            workload10++;
            break;
        case 20:
            workload20++;
            break;
        case 30:
            workload30++; 
            break;
        case 40:
            workload40++;
            break;
        default:
            break;
    }   
}

workload10 = workload10/employeeList.length;
workload20 = workload20/employeeList.length;
workload30 = workload30/employeeList.length;
workload40 = workload40/employeeList.length;


const dataPieChart = [
    {
        label: '10hod tydne',
        value: workload10,
    },
    {
        label: '20hod tydne',
        value: workload20,
    },
    {
        label: '30hod tydne',
        value: workload30,
    },
    {
        label: '40hod tydne',
        value: workload40,
    },
]

// console.log(dataPieChart)



//2. cetnost veku vsech muzu

const dataMenChart = [
    {
        label: '19',
        value: 3,
    },
    {
        label: '23',
        value: 5,
    },
]


function getAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - new Date(birthday).getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}


function getMaleAges() {
    let dataMenChart = [];

    for (let index = 0; index < employeeList.length; index++) {
        const employee = employeeList[index];
        let count = dataMenChart.reduce(function(n, person) {
            return n + (person.label == getAge(employee.birthday));
        }, 0);
        if (employee.gender === 'male') {
            let obj = {};
            if (dataMenChart.find(o => o.label === getAge(employee.birthday))) {
                objIndex = dataMenChart.findIndex((obj => obj.label == getAge(employee.birthday)));
                count = namesObject[objIndex].value + count
                namesObject[objIndex].value = count;
            } else {
                obj = {'label': getAge(employee.birthday),'value': 1};
                dataMenChart.push(obj);
            }
        }
    }

    return dataMenChart;
}

console.log(getMaleAges());

//3. cetnost pracovnich uvazku muzu a zen 

const dataWorkloadChart = [
    {
        label: '10',
        valueMale: 3,
        valueFemale: 3,
    },
    {
        label: '20',
        valueMale: 3,
        valueFemale: 3,
    },
    {
        label: '30',
        valueMale: 3,
        valueFemale: 3,
    },
    {
        label: '40',
        valueMale: 3,
        valueFemale: 3,
    },
]