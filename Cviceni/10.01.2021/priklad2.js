// Příklad 2

// 1) Nechte uživatele zadat rok, který ho zajímá

// 2) Vypište slovo "budoucnost", "přítomnost" nebo "minulost", podle toho jaký rok zadal

// 3) Zkuste vypisovat složitější věty se zakomponováním roku, který uživatel zadal - např. "Zadal jste rok 2028, ten je v budoucnosti."

// 4) Pokud uživatel zadal rok v jiném (než současném) století, vypište ještě, že to už je hodně dávno resp. daleko

// 5 bonus) - vymyslete jak zjistit, že se jedná o jiné století výpočtem s pomocí současného roku




const year = parseInt(prompt("Zadejte rok"))

const century = Math.floor(year / 100) + 1



const currentYear = new Date().getFullYear()

const currentCentury = Math.floor(currentYear / 100) + 1



if (year == currentYear)

  alert("přítomnost")

else if (century > currentCentury) // pozor na pořadí! - kdybychom tento if dali až za ten následující, tak se do něj nikdy nedostaneme

  alert("Zadal jste rok " + year + ", ten je v daleké budoucnosti.")

else if (year > currentYear)

  alert("Zadal jste rok " + year + ", ten je v budoucnosti.")

else

{​​

  // if/else můžeme i zanořovat

  if (century < currentCentury)

    alert(`Zadal jste rok ${​​year}​​, ten je v daleké minulosti.`)

  else

    alert(`Zadal jste rok ${​​year}​​, ten je v minulosti.`)

}​​