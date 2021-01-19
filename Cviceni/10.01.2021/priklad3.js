// Příklad 3

// Představte si moderní samořídící auto jedoucí někde na D1

// 1) definujte konstantu pro max. konstrukční rychlost auta a proměnnou pro maximální povolenou rychlost na úseku cesty

const maxCarSpeed = 280;
const maxRoadSpeed = 130;
// 2) nechte uživatele zadat požadovanou rychlost

let desiredSpeed = Number(prompt("Zadejte požadovanou rychlost"));

// 3) vypočítejte rychlost auta (využijte if/else)

//    - chceme ideálně dostat uživatelem požadovanou rychlost, ale ta nesmí překračovat ani jednu

//      z maximálních povolených rychlostí

if (isNaN(desiredSpeed)) {
    alert("Nezadal jsi cislo");
} else if (desiredSpeed <= 0 || !Number.isInteger(desiredSpeed)) {
    alert("Nezadal jsi kladne cislo");
} else if (desiredSpeed <= maxRoadSpeed && desiredSpeed <= maxCarSpeed) {
    alert(`Your speed is: ${desiredSpeed}kmph - great.`);
} else {
    alert(`Your speed is: ${desiredSpeed}kmph - not possible.`);
}

// 4) výsledek vypište do konzole nebo alertem

// 5) vyzkoušejte správnou funkci s různými rychlostmi

// 6 bonus) ověřte, že uživatel zadává číslo. V případě, že zadá např. "abc", upozorněte ho alertem a nevracejte žádný výsledek (byl by pravděpodobně NaN)

// 7 bonus) ověřte, že uživatel zadává kladné celé číslo. Jinak ho upozorněte alertem a nevracejte žádný výsledek


// const maxCarSpeed = 90

// let roadSpeedLimit = 130

// let desiredSpeed = Number(prompt("Jakou rychlostí chcete jet?"))



// if (isNaN(desiredSpeed))

//   alert("Nezadal jste číslo")

// else if (desiredSpeed <= 0 || !Number.isInteger(desiredSpeed))

//   alert("Nezadal jste kladné celé číslo.")

// else

// {​​

//   let speed = 0



//   if (desiredSpeed <= roadSpeedLimit && desiredSpeed <= maxCarSpeed)

//   {​​

//     speed = desiredSpeed

//   }​​

//   else

//   {​​

//     speed = roadSpeedLimit < maxCarSpeed ? roadSpeedLimit : maxCarSpeed;

//   }​​



//   alert(`Nastavená rychlost: ${​​speed}​​ km/h`)

//   alert(`Nastavená rychlost: ${​​speed}​​ km/h`)

//   alert('Nastavená rychlost: ' + speed + " km/h")

// }​​