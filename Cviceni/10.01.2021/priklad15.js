// Příklad 1
// Napište funkci, která zkontroluje, že zadaný text:
// - neobsahuje mezeru
// - je kratší, než 20 znaků
// Přidejte callback pro případ validního i nevalidního textu

function isValid(text, onValid, onInvalid) {
    const valid = !text.includes(" ") && text.length < 20
  
    valid && onValid && onValid() // stejné jako: if (valid && onValid) onValid()
    !valid && onInvalid && onInvalid() // stejné jako: if (!valid && onInvalid) onInvalid()
  
    return valid
}
    
function writeValid() {
    console.log("valid")
}
  
isValid("ahojahojahojahojaho", writeValid)
isValid("ahojahojahojahojahoj", writeValid, () => console.log("invalid"))
isValid("ahoj ahoj", writeValid, () => console.log("invalid"))