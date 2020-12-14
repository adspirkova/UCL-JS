// Příklad 1 - bonus
// 1) napište funkci, která vrátí vstupní text rozdělený na řádky (\n) po 80 znacích
// 2) počet znaků nechte jako možnost zadat nepovinným parametrem (defaultní hodnota 80)
// 3 bonus) nerozdělujte text uprostřed slova
// 4 bonus) nenechávejte na konci řádku 1 písmeno (a, i, k, s, z aj.)


const text160 = "Burem ipsum dolor sit amet consectetur adipisicing elit. k Saepe voluptatum j conseqLorem ipsum dolor sit amet consectetur a adipisicing elit. l Saepe voluptatum conseq Burem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum conseqLorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum conseq";

function breakToLines(text, lineChars = 80) {
    const words = text.split(" ");
    //console.log(words);
    let lines = [""];
    let prevWord;

    for (const word of words) {
        let currentLine = lines.length - 1;
        //console.log(currentLine);
        //console.log(lines[currentLine]);

        if (lines[currentLine].length + word.length < lineChars) {
            lines[currentLine] += word + " ";
        } else if (prevWord &&  prevWord.length === 1) {
            lines[currentLine] = lines[currentLine].substring(0, lines[currentLine].length - 2)
            lines.push(prevWord + " " + word + " ");
        } else {
            // console.log(word + "<br/>");
            // console.log(lines + "<br/>");
            lines.push(word + " ");
            // console.log(lines);
        }
        prevWord = word;
    }

    return lines.join("\n");
}

console.log(breakToLines(text160));