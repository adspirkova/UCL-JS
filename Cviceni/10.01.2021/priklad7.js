// Příklad 

// Vypište vstupní pole hodnot v opačném pořadí

// 2 varianty

const array = [123, 456, "ahoj", "cokoliv"];

//1.
//console.log(array.reverse());


//2.
//for (let index = array.length - 1; index > -1; index--) {
    //console.log(array[index]);
//}
 //3.
//const newArr = []
//while (array.length)  newArr.push(array.pop());
//console.log(newArr);

//4. 
const brandNewArr = []
for(const index in array){
    brandNewArr.push(array[array.length - index - 1]); 
}

console.log(brandNewArr)