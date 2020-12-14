// Pr 2

// zadej cisla v opacnem poradi


const pole = [123, 456, "ahoj", "cokoliv"];

for (let index = pole.length - 1; index >= 0; index--) {
    console.log(pole[index]);
}


// python priklad
for (let index = 0; index < pole.length; index++) {
    console.log(pole[pole.length - index - 1]);
}