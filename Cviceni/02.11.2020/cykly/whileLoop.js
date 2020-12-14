let cont = true;

let result = 0;

while (cont) {
    let input = window.prompt("Enter input number, use an empyt line to terminate");
    if (input === '') {
        cont = false;
    } else {
        result += parseFloat(input);
    }
    console.log(result);
}

console.log("your numbers in a reverse order:");

for (let index = 0; index < result.length; index++) {
    console.log(result[result.length - i -1]);
}
