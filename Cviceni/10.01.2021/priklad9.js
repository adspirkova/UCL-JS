// Příklad 

// 1) napište funkci, která vrátí vstupní text rozdělený na řádky (\n) po 80 znacích

// 2) počet znaků nechte jako možnost zadat nepovinným parametrem (defaultní hodnota 80)

// 3 bonus) nerozdělujte text uprostřed slova

// 4 bonus) nenechávejte na konci řádku 1 písmeno (a, i, k, s, z aj.)

let longText = "Před srážkou se Zemí meteoroid obíhal Slunce po málo výstředné dráze, která byla necelých 20 stupňů skloněna k rovině ekliptiky, tj. rovině zemské dráhy. V přísluní se dostával jen o něco blíže ke Slunci, než je dráha Země, a v odsluní se dostal jen málo za dráhu planety Mars. Pravděpodobně se jednalo původně o část asteroidu pocházejícího z vnitřní části hlavního pásu planetek. Kvůli inverznímu rázu počasí sice zůstal na velké části našeho území pro většinu obyvatel skrytý hustou vrstvou nízké oblačnosti, našla se ale i místa, kde bylo alespoň částečně jasno - a několik náhodných svědků poslalo odborníkům svá hlášení. Pro objasnění zmíněných parametrů vzácného přírodního úkazu včetně jeho průletu naší atmosférou i Sluneční soustavou bylo rozhodující, že se podařil zaznamenat speciálními přístroji, které jsou rozmístěny na stanicích tzv. Evropské bolidové sítě. V době přeletu bolidu bylo podle dalšího astronoma Jiřího Borovičky zcela nebo aspoň částečně jasno na více než polovině všech stanic, přičemž na devíti z nich byl bolid zaznamenán."

function splitIntoWords(text) {
    let words = text.split(" ");
    //console.log(words);
    return words;
}

function concatIntoLines(words, divider) {
    let lines = [];
    let newLine = "";
    for (let index = 0; index < words.length; index++) {
        newLine += words[index] + " ";
        if (newLine.length >= divider) {
            lines.push(newLine);
            newLine = "";
        }
    }

    return lines;
}

let words = splitIntoWords(longText);
let lines = concatIntoLines(words, 80);
let newText = lines.join("\n");

document.getElementById("text").innerText = newText;



// function breakToLines(text, lineChars = 80) {
//   let lines = ""
  
//   for (let start = 0; start < text.length; start += lineChars)
//   {
//     const end = start + lineChars
//     lines += text.substring(start, end)
//     if (end < text.length)
//       lines += "\n"
//   }

//   return lines
// }

/* řešení bodů 1,2,3,4 

function breakToLines2(text, lineChars = 80) {​​​​

  const words = text.split(" ")

  let lines = [""]

  let prevWord



  for (const word of words)

  {​​​​

    let current = lines.length - 1



    if (lines[current].length + word.length <= lineChars)

    {​​​​

      lines[current] += word + " "

    }​​​​

    else if (prevWord && prevWord.length == 1)

    {​​​​

      lines[current] = lines[current].substring(0, lines[current].length - 2)

      

      lines.push(prevWord + " " + word + " ")

    }​​​​

    else

    {​​​​

      lines.push(word + " ")

    }​​​​



    prevWord = word

  }​​​​



  return lines.join("\n")

}​​​​

console.log(breakToLines2(longText, 40)) */