// Příklad 5)

// Napište převodník barev z hexa formátu na decimální

// 1) Využijte regulární výraz pro kontrolu validity barvy ve formátu #RRGGBB (velkost písmen A-F nehraje roli)

// 2) Převeďte na "rgb(rrr, ggg, bbb)" (hex => dec)

// 3 bonus) Doplňte možnost zadat na vstupu barvu ve formátu #RGB (#2AC == #22AACC)

// 4 bonus) Doplňte převod #RRGGBBAA (případně i #RGBA) na rgba(rrr, ggg, bbb, a)   (a == alpha/neprůhlednost a je v rozmezí 0-1)

const { html } = require('./html.js');
let regex = /^#(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$/;
let text = "#123456";

console.log(text.match(regex));
console.log(html);
