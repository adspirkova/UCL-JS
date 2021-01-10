// Příklad 1

// - máte seznam zvířat v zoo s jejich ošetřovatelem a hodinou krmení (doplňte si další)

// [

//   {​​animal: "tiger", keeper: "Jan", feeding: 15}​​,

//   {​​animal: "elephant", keeper: "Eva", feeding: 18}​​,

//   {​​animal: "giraffe", keeper: "Eva", feeding: 13}​​,

//   {​​animal: "lion", keeper: "Jan", feeding: 14}​​,

//   {​​animal: "wolf", keeper: "Jan", feeding: 16}​​,

//   {​​animal: "gazelle", keeper: "Eva", feeding: 10}​​

// ]

// - vytvořte funkci, která vrátí rozvrh krmení pro ošetřovatele

// - např. funkce getFeedingTimetable("Jan") vrátí:

// [

//   {​​animal: "lion", time: 14}​​,

//   {​​animal: "tiger", time: 15}​​,

//   {​​animal: "wolf", time: 16}​​

// ]

// - bonus: udělejte možnost u každého zvířete zadat více časů krmení

// - bonus 2: vytvořte funkci, která vrátí nejbližší další krmení pro ošetřovatele podle aktuálního času

// - např. getNextFeeding("Eva"), když je zrovna 17:25 -> {​​animal: "elephant", time: 18}​​


// function getFeedingTimetable(keeperName) {​​​​​
//     return animals.reduce(function (acc, currentAnimal) {​​​​​
//       if (currentAnimal.keeper === keeperName) acc.push(currentAnimal)
//        return acc
//     }​​​​​, []);
//   }​​​​​