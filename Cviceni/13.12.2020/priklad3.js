// Příklad 3

// Napište funkci, která ze dvou vstupních polí vrátí pouze unikátní prvky

// Bonus: Udělejte funkci tak, aby zvládla vzít 1 až x vstupních polí

// Př.

const arr = [1,2,3,4,5,6,7,8,9,10]

const arr2 = [7,8,9,10,11,12,13]

// výsledek (nemusí být pole):

// [1,2,3,4,5,6,7,8,9,10,11,12,13]

function uniqueValues(...params) {
    let uniqueValues = new Set;
    params.forEach(element => {
        element.forEach(element2 => {
            uniqueValues.add(element2)
        });
    });
    return uniqueValues;
};

console.log(uniqueValues(arr, arr2));