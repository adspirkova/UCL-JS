// Příklad 

// Napište funkci round, která jako vstupní parametr vezme číslo a počet desetinných míst a vrátí číslo (Number) zaokrouhlené na daný počet des. míst"

//1.zp
function round(number,decimalPlaces ) {
    return Math.round(number * 10**decimalPlaces) / 10**decimalPlaces
}
  
//2.zp
const round2 = (number, decimalPlaces) => +number.toFixed(decimalPlaces)
console.log(round2(12.33344,2)); 
  
console.log(round(-10.5, 3))
console.log(round(-10.456519, 3))
console.log(round(10.456519, 3))
console.log(round(10.456339, 3))
console.log(round(10.456789, 0))
console.log(round(15.456789, -1))