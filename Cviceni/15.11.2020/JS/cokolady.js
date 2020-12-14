//Student má rád čokoládu a před zkouškovým obdobím si jde obalit nervy do cukrárny, kde se koná speciální prodejní akce.
// Kromě toho, že si může koupit čokoládu za peníze,
// je možné si koupit čokoládu rovněž za obaly od snědené čokolády. Student má na začátku m peněz. Jedna čokoláda stojí p peněz.
// Student si nejdříve nakoupí čokolády za peníze a všechny čokolády sní. Jednu čokoládu si rovněž může koupit za w obalů od čokolády.
// Takže vezme obaly od čokolád a jde si znovu za ně nakoupit čokoládu.
// Tuto činnost – nákup čokolády za obaly, snědení čokolády a znovu nákup za obaly opakuje tak dlouho, dokud mu obaly nedojdou.
//
// m= 20 penez
// p = 2 cena cokolady
// w = 2 pocet obalu

m = 20;
p = 2;
w = 2;

function buyForMoney(money, price) {
    return Math.floor(money / price);
}

function buyForwrappers(noOfwrappers, wrappersKoeficient) {
    return Math.floor(noOfwrappers / wrappersKoeficient);
}

function leftFromwrappers(noOfwrappers, wrappersKoeficient) {
    return noOfwrappers % wrappersKoeficient;
}

function countChocolates(money, price, wrappers) {
    let noOfwrappers = 0;
    let currentNoOfWrappers = 0;
    let noOfChocolates = 0;
    noOfChocolates = buyForMoney(money, price);
    noOfwrappers = noOfChocolates; 
    currentNoOfWrappers = noOfwrappers;
    // console.log(noOfChocolates);
    // console.log(noOfwrappers);
    // console.log(currentNoOfWrappers);
    while (currentNoOfWrappers >= wrappers) {
        noOfChocolates += buyForwrappers(currentNoOfWrappers, wrappers);
        currentNoOfWrappers = buyForwrappers(currentNoOfWrappers, wrappers) + leftFromwrappers(currentNoOfWrappers, wrappers);
        // console.log(noOfChocolates);
        // console.log(currentNoOfWrappers);
    }
    return noOfChocolates;
}

console.log(countChocolates(m, p, w));
