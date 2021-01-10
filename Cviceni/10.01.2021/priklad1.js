// Příklad 1

// 1) Zjistěte od uživatele rok jeho narození

// 2a) Pokud v současném roce uživatel dosáhl nebo dosáhne 18 let, vypište "Můžete volit"

// 2b) Jinak vypište "Nemůžete volit"


document.getElementById("submit").addEventListener("click", function() {
    let input = document.getElementById("age");
    let currentYear = new Date().getFullYear();
    // console.log(input.value);
    // console.log(currentYear);
    if (currentYear - input.value >= 18) {
        alert("Můžete volit");
    } else {
        alert("Nemůžete volit");
    }
  });