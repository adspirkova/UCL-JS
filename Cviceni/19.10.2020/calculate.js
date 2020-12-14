const form = document.getElementById("calcForm"); //targetne form 
console.log(form);
form.addEventListener("submit", (e) => { e.preventDefault()}); //Zakáže submitnutní formu (defaultní chování submit eventu) });

function write(x) {
    document.getElementById("result").innerText = x;
}

function validate(a, b) {
    if (a === "" || b === "") {
        alert("Prazdna hodnota");
    }
    if (isNaN(a) || isNaN(b)) {
        alert("String!!!");
    }
}

function add(a,b) {
    validate(a,b);
    x = parseInt(a) + parseInt(b);
    console.log(x)
    return write(x);
}

function remove(a,b) {
    validate(a,b);
    x = parseInt(a) - parseInt(b);
    console.log(x)
    return write(x);
}

function multiply(a,b) {
    validate(a,b);
    x = parseInt(a) * parseInt(b);
    console.log(x)
    return write(x);
}

function substract(a,b) {
    validate(a,b);
    x = parseInt(a) / parseInt(b);
    console.log(x)
    return write(x);
}