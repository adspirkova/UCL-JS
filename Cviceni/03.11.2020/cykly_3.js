let min, max;

const pole = [10,4.5,78,-25,46,-10,0,-22.22];
const pole2 = [1000, 1000,1000];
min = 0;
max = 0;


// forOf cyklus
for (let prvek of pole) {
    if (prvek < min) 
        min = prvek
    if (prvek > max)
        max = prvek
}

console.log("min ", min);
console.log("max", max);
 
min = undefined;
max=undefined;

for (let prvek of pole2) {
    if (min === undefined || prvek < min) 
        min = prvek
    if (max === undefined || prvek > max)
        max = prvek
}

console.log("min ", min);
console.log("max", max);
 

console.log("Math.min", Math.min(...pole));
console.log("Math.max", Math.max(...pole));