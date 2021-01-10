// Příklad

// Napište převodník barev z hexa formátu na decimální

// 1) Využijte regulární výraz pro kontrolu validity barvy ve formátu #RRGGBB (velkost písmen A-F nehraje roli)

// 2) Převeďte na "rgb(rrr, ggg, bbb)" (hex => dec)

// 3 bonus) Doplňte možnost zadat na vstupu barvu ve formátu #RGB (#2AC == #22AACC)

// 4 bonus) Doplňte převod #RRGGBBAA (případně i #RGBA) na rgba(rrr, ggg, bbb, a)   (a == alpha/neprůhlednost a je v rozmezí 0-1)


function hexColorToDec2(colorCode) {​​

    const hexRegex = /^#([0-9A-Fa-f]{​​2}​​)([0-9A-Fa-f]{​​2}​​)([0-9A-Fa-f]{​​2}​​)([0-9A-Fa-f]{​​2}​​)?$/ // #rrggbb || #rrggbbaa
  
    const shortHexRegex = /^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])?$/ // #rgb || #rgba
  
    
  
    const match = hexRegex.exec(colorCode) || shortHexRegex.exec(colorCode)
  
    if (match == null)
  
      return "Invalid color code"
  
    
  
    const rgbParts = match
  
      .slice(1, 5)
  
      .filter(part => part)
  
      .map(part => part.length == 1
  
        ? part + part // #rgb/#rgba -> #rrggbb/#rrggbbaa
  
        : part)
  
      .map(part => parseInt(part, 16))
  
      .map((part, i) => {​​
  
        const isAlpha = i == 3
  
        return isAlpha
  
          ? +(part / 0xFF).toFixed(2) // ff -> 1; 0 -> 0
  
          : part
  
      }​​)
  
    // ^^ možná překombinované, porovnejte s řešením Milana ze skupiny S2 - co je pro vás čitelnější/jasnější?
  
  
  
    let decColor = rgbParts.length == 4 ? "rgba" : "rgb"
  
    decColor += `(${​​rgbParts.join(", ")}​​)`
  
  
  
    return decColor
  
  }​​
  
  /** Converts hexadecimal color code to rgb() or rgba() format

 * @param {​​string}​​ colorCode hexadecimal color code)

 * @example #AABBCCDD -> rgba(170, 187, 204, 0.87)

 */

function hexColorToDec3(colorCode) {​​

    // regex - named groups, flag /i
  
    const hexRegex = /^#(?<R>[0-9a-f]{​​2}​​)(?<G>[0-9a-f]{​​2}​​)(?<B>[0-9a-f]{​​2}​​)(?<A>[0-9a-f]{​​2}​​)?$/i
  
    const shortHexRegex = /^#(?<R>[0-9a-f])(?<G>[0-9a-f])(?<B>[0-9a-f])(?<A>[0-9a-f])?$/i
  
    
  
    // ?? operátor - novinka v javaScriptu (najděte si rozdíly proti || operátoru)
  
    const match = hexRegex.exec(colorCode) ?? shortHexRegex.exec(colorCode)
  
    if (match == null) throw new Error("Invalid color code") // vyhození vlastní chyby - má stackTrace, odchytit lze v try/catch bloku
  
  
  
    // destructuring - hodně šikovné a používané (i s poli)
  
    let {​​R, G, B, A}​​ = match.groups
  
    
  
    // lokální funkce
  
    const toDec = hexColor => hexColor.length == 1
  
      ? toDec(hexColor + hexColor) // rekurze
  
      : +(`0x${​​hexColor}​​`)         // tohle se dá použít pro převod na číslo místo parseInt(hexColor, 16)
  
  
  
    R = toDec(R)
  
    G = toDec(G)
  
    B = toDec(B)
  
    if (A) {​​
  
      A = +(toDec(A) / 0xFF).toFixed(2)
  
      return `rgba(${​​R}​​, ${​​G}​​, ${​​B}​​, ${​​A}​​)`
  
    }​​
  
  
  
    return `rgb(${​​R}​​, ${​​G}​​, ${​​B}​​)`
  
  }​​
  
  
  
  console.log(hexColorToDec("#b5A", ))
  
  console.log(hexColorToDec("#bB55Aa"))
  
  console.log(hexColorToDec("#0948"))
  
  console.log(hexColorToDec("#00994488"))
  
  console.log(hexColorToDec("#abcd"))
  
  console.log(hexColorToDec("#AABBCCDD"))
  
  console.log(hexColorToDec("#holahej"))

  function distinct1(array1, array2) {​​

    const uniqueValues = new Set()
  
  
  
    array1.concat(array2).forEach(item => uniqueValues.add(item))
  
  
  
    return uniqueValues
  
  }​​
  
  
  
  function distinct2(array1, array2) {​​
  
    const uniqueValues = new Set(array1.concat(array2)) // můžeme rovnou dát do konstruktoru Set
  
    return Array.from(uniqueValues) // převod Set na Array
  
  }​​

  function distinctBonus1(...arrays) {​​

    const uniqueValues = [] // zkusíme to bez použití set
  
  
  
    arrays.flat().forEach(item => {​​
  
      if (!uniqueValues.includes(item))
  
        uniqueValues.push(item)
  
    }​​)
  
  
  
    return uniqueValues
  
  }​​
  
  
  
  const distinctBonus2 = (...arrays) => new Set(arrays.flat())

  console.log(distinct1(arr, arr2));

console.log(distinct2(arr, arr2));

console.log(distinctBonus1(arr, arr2, [13, 14, 15]));

console.log(distinctBonus2(arr, arr2, [13, 14, 15]));