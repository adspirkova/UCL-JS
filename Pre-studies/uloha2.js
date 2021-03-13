let employeeList = require('./uloha2_list');


//1.
//console.log(`No of employees: ${employeeList.length}`);



// 2.
let ten = 0;
let twenty = 0;
let thirty = 0;
let fourty = 0;

for (let index = 0; index < employeeList.length; index++) {
    const workload = employeeList[index].workload;
    switch (workload) {
        case 10:
            ten++;
            break;
        case 20:
            twenty++;
            break;
        case 30:
            thirty++; 
            break;
        case 40:
            fourty++;
            break;
        default:
            break;
    }   
}

// console.log(`with 10hours workoload: ${ten}`);
// console.log(`with 20hours workoload: ${twenty}`);
// console.log(`with 30hours workoload: ${thirty}`);
// console.log(`with 40hours workoload: ${fourty}`);


//3. Average age


//!!!!!!!!this one is probably wrong!!!!!
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function mySum(total, num) {
    return total + num;
}

let ages = employeeList.map(employee => {
    return getAge(employee.birthday);
})

let averageAge = ages.reduce(mySum)/ ages.length;


//console.log(averageAge.toFixed(1));



//4. minimal and maximal age

let minimum = Math.min(...ages);
let maximum = Math.max(...ages);

function getEmployeeByAge(age) {
    let employeesByAge = employeeList.map(employee => {
        if (getAge(employee.birthday) === age) {
            return employee;
        }
    })

    return employeesByAge;
}

// console.log(minimum);
// console.log(getEmployeeByAge(minimum))
// console.log(maximum);
// console.log(getEmployeeByAge(maximum))



// 6. Median


function median(values){
    if(values.length ===0) return 0;
  
    values.sort(function(a,b){
      return a-b;
    });
  
    var half = Math.floor(values.length / 2);
  
    if (values.length % 2)
      return values[half];
  
    return (values[half - 1] + values[half]) / 2.0;
}

//console.log(median(ages));


//7.

function compare( a, b ) {
    if ( a.workload < b.workload ){
      return -1;
    }
    if ( a.workload > b.workload ){
      return 1;
    }
    return 0;
  }
// console.log(employeeList.sort( compare ));

//8. 
let workloads = employeeList.map(employee => {
    return employee.workload;
})

//console.log(workloads);

//9. 


function getworkloadsPerWomen() {
    let workloadsPerWomen = [];
    for (let index = 0; index < employeeList.length; index++) {
        const employee = employeeList[index];
        if (employee.gender === 'female') {
            workloadsPerWomen.push((employee.workload));
        }
    }

    return (workloadsPerWomen.reduce(mySum)/ workloadsPerWomen.length).toFixed();
}

console.log(getworkloadsPerWomen());
