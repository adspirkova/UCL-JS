// script secte cisla od 1 do 100, ktera nejsou delitelna 5

function getSumOfModulo5(min, max) {
    let x = 0;
    for (let index = min; index <= max; index++) {
        if (index % 5 !== 0){
           x += index;
        }
        continue;
    }
    return x;
}

console.log(getSumOfModulo5(1,100));