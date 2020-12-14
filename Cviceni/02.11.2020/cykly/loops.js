let counter = 6
while (counter > 0) {
  counter -= 1;
  if (counter === 3) break;
  console.log(counter);
}

console.log("-------")
counter = 6;
while (counter > 0){
  counter -= 1;
  if (counter === 3) continue;
  console.log(counter);
}

for (let index = 0; index < 10; index++) {
    if (index !== 4 && index !== 8) {
        console.log("hello world");
    }
}