function helloWorld(name) {
    console.log("Hello " + name);
}

// helloWorld("Ivo");

function customPad(number, zeros) {
    let result = number.toString();
    for (let index = 0; index < zeros; index++) {
        if (result.length < zeros) {
            result = "0" + result;
        }
    }

    return result;
}

console.log(customPad(10, 5));