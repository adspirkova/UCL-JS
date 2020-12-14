// Příklad 1
// 1) napište funkci, která vrátí vstupní text rozdělený na řádky (\n) po 80 znacích
// 2) počet znaků nechte jako možnost zadat nepovinným parametrem (defaultní hodnota 80)
// 3 bonus) nerozdělujte text uprostřed slova
// 4 bonus) nenechávejte na konci řádku 1 písmeno (a, i, k, s, z aj.)


const text80 = "Burem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum conseqLorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum conseq";
const text160 = "Burem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum conseqLorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum conseq Burem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum conseqLorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum conseq";

function textToLine(text, znaky = 80) {
    let lines = "";
    for (let start = 0, end = start + znaky; start < text.length; end+=znaky, start+= znaky) {
        lines += text.substr(start, end);
        if (end < text.length)
        lines+="\n"
    }
    return lines;
}

console.log(textToLine(text160, 80));