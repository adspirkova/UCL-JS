let pole = [1, 2, 3, 4, 5];
let pole2 = ["ahoj", "dobry den", "polozka v poli"];

let pole3 = [...pole, ...pole2, "samostatna polozka", ...["polozka z vnoreneho pole", "2. polozka z vnoreneho pole"]];

//console.log(pole3);

// zip

function mapElement(array1, array2) {
    let newArray = [];
    for (let index = 0; index < array1.length || index < array2.length; index++) {
        if (array1.length > index)newArray.push((array1[index]));
        if (array2.length > index)newArray.push((array2[index]));
    }
    return newArray;
}

let pole4 = mapElement(pole, pole2);

console.log("ahoj");
console.log(pole4);