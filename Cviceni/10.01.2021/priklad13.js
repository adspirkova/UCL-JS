// Příklad 
// Napište funkci, která ze dvou vstupních polí vrátí pouze unikátní prvky
// Bonus: Udělejte funkci tak, aby zvládla vzít 1 až x vstupních polí
// Př.
const arr = [1,2,3,4,5,6,7,8,9,10]
const arr2 = [7,8,9,10,11,12,13]
// výsledek (nemusí být pole):
// [1,2,3,4,5,6,7,8,9,10,11,12,13]


// 1.zp
function distinctBonus1(...arrays) {
    const uniqueValues = [] // zkusíme to bez použití set
  
    arrays.flat().forEach(item => {
      if (!uniqueValues.includes(item))
        uniqueValues.push(item)
    })
  
    return uniqueValues
}

//2. zp
const distinctBonus2 = (...arrays) => new Set(arrays.flat());

console.log(distinctBonus1(arr, arr2))
    


