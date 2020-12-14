
// definujte promennou s hodnotou "a", pak teto promenne postupne pridavejte psimenka nez vznikne "ahoj"

function test () {

    let hi = "a";
    hi+="h";
    hi+="o";
    hi+="j";
    console.log(hi);
};

test();


// definujte promennou
// a=5;
// a*4, a/10, a+8, a-3

function test2 () {

    let a = 5;
    a*=4;
    a/=10;
    a+=8;
    a-=3;
    console.log(a);
};

test2();

// Vytvorte funkci, ktera ze dvou cisel vypise mensi cislo

function test3 (a,b) {
    console.log( a < b ? a : b);
    // if (a<b) {
    //     console.log(a);
    // } else {
    //     console.log(b);
    // }
};

test3(5,99);

// Vytvorte funkci, ktera ze dvou cisel vypise vetsi cislo

function test4 (a,b) {
    return a > b ? a : b;
};

console.log(test4(3,2));

// Vytvorte funkci, ktera vrati nejmensi cislo z pole

function test5 (...numberArray) {
    for (let i=0; i < numberArray.length; i++) {

        console.log('up');
        console.log(i);
        var minvalue = numberArray[0];
        console.log(minvalue);
        console.log(numberArray[i]);
        if(numberArray[i]<minvalue)
        {
            minvalue = numberArray[i];
        }
        console.log(minvalue);
    }
};

console.log("here")
console.log(test5(1,2,40,-10,22));

// Vytvorte funkci, ktera vrati aritnmeticky prumer

const policko = [1,2,40,-10,22];
function test6 (numberArray) {
    for (let i=0; i < numberArray.length; i++) {
        return numberArray.reduce((a, b) => (a + b)) / numberArray.length;
    }
};

console.log("test6");
console.log(test6(policko));

// do camelCase


function test7 (str) {
//     let space = text.split("");
//    console.log(space);
//     let camelCase = space.map (word => {
//         console.log(word);
//         let newWord = word[0].toUpperCase();
//         console.log(newWord);
//         newWord += word.substring(1, word.length).toLowerCase();
//         console.log(newWord);
//         return newWord;
//         }
//     )
   
//     return camelCase.join("");

    toCammelCase = str.split(' ').map((value) => value.charAt(0).toUpperCase() + value.substring(1)).join('');
    return toCammelCase;
};

console.log(test7("ahoj Svete"));

function camelCase(string) {
    if (string.includes(" ")) {
        const splittedString = string.split(" ");
        let newString = splittedString.map(item => {
            return item.charAt(0).toUpperCase()+ item.slice(1);
        }).join('');
        newString = newString.charAt(0).toLowerCase() + newString.slice(1);
        return newString;
    } else {
        return string.toLowerCase();
    }
}

console.log(camelCase("cauky manuky dpopa"));


// projdi array a pouzij forEach


let arrayka = ["adel", "franta", "pavel", "honza"];

arrayka.forEach(element => {
    console.log(element);
});

arrayka.push("Karolina");
console.log(arrayka);