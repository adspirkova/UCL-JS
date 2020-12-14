const hodnoty = [10, 20, 30, 40, 50];

const final = hodnoty.map(function multiplyBy10(value) {
    return value * 10;
});
 ///////

const final2 = hodnoty.map(value => value * 10);
//////

const multiply = value => value * 10;

const final3 = hodnoty.map(multiply);

////// nasobeni indexem
const multiply2 = (value, value2 = 10) => value * value2;

const final4 = hodnoty.map(multiply2);



console.log(final);
console.log(final2);
console.log(final3);
console.log(final4);