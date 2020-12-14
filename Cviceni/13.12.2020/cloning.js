const tree = {height: 25, width: 33};

const tree2 = {...tree};

tree2.height = 40;

const tree3 = Object.assign({}, tree2);

// console.log(tree);
// console.log(tree2);
// console.log(tree3);

const forrest = [tree, tree2, tree3];
const forrest2 = [...forrest];
const forrest3 = forrest.slice();

// forrest.pop();
// forrest.push(tree3);

console.log(forrest);
console.log(forrest2);
console.log(forrest3);