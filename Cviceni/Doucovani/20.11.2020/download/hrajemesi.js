//==============================PRVNÍ ETAPA==================================
/**
 * 1. ukázka: Práce s proměnnými a jak si je zkontrolovat!
 */
//----
//----
//----

const jmeno = "adela";
const prijmeni = "spirkova";
const spojeni = `${jmeno} ${prijmeni}`;
console.log(spojeni);
/**
 * 1. úkol: (1 minuta a 20 sekund)
 * Vytvořte novou constantu "veta" jejíž hodnota bude = Unicorn College je naprosto fantastická a super!
 * Hodnotu proměnné "veta" vytvořte pomocí template literals!
 */
const skola = "Unicorn College";
const hodnoceni = "super";
const veta = `${skola} je naprosto fantastická a ${hodnoceni}`;
console.log(veta);









//======================================================================
/**
 * 2. ukázka: Jak si načíst HTML element do proměnné
 */
//----
//----
//----
/**
 * 2. úkol: (1 minuta a 20 sekund)
 * Vytvorte novou constantu "vstupOdUzivatele"
 * Tuto proměnnou napojte na ID tohoto vstupního pole <input type="text" id="vstupni-pole">
 * Pomocí console logu ověřte, že vše funguje
 */


const vstupOdUzivatele = document.getElementById('vstupni-pole');
console.log(vstupOdUzivatele);







//======================================================================
/**
 * 3. ukázka: Funkce v javascriptu - základní stavební prvek
 */
//----
//----
//----
/**
 * 3. úkol: (2 minuty)
 * Vytvořte funkci, která bude mít jediný argument - jmeno.
 * Po spuštění funkce se do console vypíše - Tvé jméno je ${jmeno}? Rád tě poznávám!
 */


function ahoj(name) {
  let x = `${name} + Rád tě poznávám!`
  console.log(x);
}

ahoj('adela');





 

//======================================================================
/**
 * 4. ukázka: Propojení funkcí s HTML
 */
//----
//----
//----
/**
 * 4. úkol: (3 minuty)
 * 1. Vytvořte constantu submitBtn a propojte jí s tímto elementem: 
 * <input type="submit" value="potvrdit" id="submit-btn">
 * 2. Na constantu vytvořte takovou událost, že když uživatel klikne na tlačítko, 
 * do console se propíše - "Uživatel klikl na tlačítko"
 */

const submitBtn = document.getElementById('submit-btn');
const vstupOdUzivatele2 = document.getElementById('vstupni-pole');
submitBtn.addEventListener('click', function() {
  console.log(vstupOdUzivatele2.value);
})




 

//======================================================================
/**
 * 5. ukázka: Propojení tagů javascriptem
 */
//----
//----
//----
/**
 * 5. úkol: (5 minut)
 * Na již vytvořenou událost submitovacího tlačítka z předchozího úkolu
 * vytvořte novou funkcionalitu - když uživatel klikne na tlačítko, 
 * vypíše se consolí obsah vstupního pole. 
 */








 

//======================================================================
/**
 * 6. ukázka: Co to vlastně uživatel zadává? (Cvičení na if else, isNaN a length);
 */
//----
//----
//----

/**
 * 6. úkol: (5 minut)
 * 1. Naprogramujte funkci, která se bude spouštět při vstupu uživatele ale i při kliknutí na submit button. 
 * 2. Tato funkce bude zkoumat, zda vstup uživatele obsahuje text nebo čísla. 
 * 3. Pokud vstup od uživatele obsahuje text a zároveň vstup není prázdný - vypište do console, že "Takhle teda ne chlapečku";
 * 4. Pokud vstup od uživatele obsahuje jen čísla  a zároveň vstup není prázdný - vypište do console, že "Tohle mohu spočítat";
 * 5. Pokud je od uživatele vstup jako text, vypište, jak je text dlouhý. 
 */


function kontrolaVstupu(text) {
  if (isNaN(text)) {
    console.log("Takhle teda ne chlapečku");
  } else if (typeof text === String) {
    console.log(text);
  } else {
    console.log("Tohle mohu spočítat");
  }
}

const submitBtn2 = document.getElementById('submit-btn');
const vstupOdUzivatele3 = document.getElementById('vstupni-pole');
vstupOdUzivatele3.addEventListener("input", function(e){
   kontrolaVstupu(e.target.value);
})






 

//======================================================================
/**
 * 7. ukázka: Naučme program pamatovat si, co uživatel zadal;
 */
//----
//----
//----

/**
 * 7. úkol: (5 minut)
 * 1. Vytvořte novou constantu vstupyOdUzivatele a dejte jí typ pole.
 * 2. Kdykoliv uživatel klikne na tlačítko, vstup uživatele se uloží do tohoto pole
 * 3. Po každém uložení vstupu od uživatele vypište, co vlastně pole obsahuje!
 * 4. Po každém uložení vstupní pole vyčistěte, aby uživatel mohl zadat novou hodnotu.
 */







 

//======================================================================
/**
 * 8. ukázka: Procházení polem - for a forEach;
 */
//----
//----
//----

/**
 * 8. úkol: (5 minut)
 * 1. Vytvořte nové tlačítko (může to být div, span - je to fuk)
 * 2. Dejte mu id "zobraz-vstupy"
 * 3. Na toto ID navažte javascriptovou událost: když uživatel klikne,
 * pomocí cyklusů for nebo forEach se vypíší všechny jeho vstupy! 
 */








 


 /**
  * 
  * ====== SHRNUTÍ ======
  * 
  */
//defaultní nastavení zakáže reload formu, když se submitne
const form = document.getElementById("hlavniform");
form.addEventListener("submit", (e) => {
    e.preventDefault();
}
);