let employeeList = require('./uloha4_list');


//nejcastejsi jmena v ramci vsech zamestnancu

function getCountNames() {
    let namesObject = [];

    for (let index = 0; index < employeeList.length; index++) {
        const employee = employeeList[index];
        let count = namesObject.reduce(function(n, person) {
            return n + (person.label == employee.name);
        }, 0);
            let object = {};
            if (namesObject.find(o => o.label === employee.name)) {
                objIndex = namesObject.findIndex((obj => obj.label == employee.name));
                count = namesObject[objIndex].value + count
                namesObject[objIndex].value = count;
            } else {
                object = {'label': employee.name,'value': 1};
                namesObject.push(object);
            }
    }

    return namesObject;
}

console.log(getCountNames());