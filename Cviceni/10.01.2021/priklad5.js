// Příklad 5

// 1) Nechte uživatele zadat číslo

// 2) Vypočítejte faktoriál zadaného čísla (5! = 1*2*3*4*5)

// 3 bonus) omezte vstup na celá kladná čísla a 0 (0! = 1)

// 4 bonus) zkuste zjistit jaké maximální číslo můžete zadat, abyste ještě dostali výsledek

let myNumber = parseInt(prompt("Zadejte cislo"));

function getFactorial(number) {
    if (isNaN(number))
      alert("Nezadal jste číslo")
    else if (!Number.isInteger(number))
      alert("Nezadal jste celé číslo")
    else if (number < 0)
      alert("Zadal jste záporné číslo")
    else if (number === "")
      alert("Nezadal jsi nic.")
    else {
        console.log(number)
        let total = 1;
    
        for (i = 0; i < number; i++){
            total = total * (number - i);
        }

    return total;
    }
}

alert(`Your factorial is: ${getFactorial(myNumber)}`)