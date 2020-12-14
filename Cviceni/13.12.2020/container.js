let obj = {height: 123};

let map = new Map;

map.set(obj, 456);
map.set("width", 123);

//console.log(map);

let uniqueValues = new Set;
uniqueValues.add(111);
uniqueValues.add(222);
uniqueValues.add(333);
uniqueValues.add(111);
uniqueValues.add(222);

console.log(uniqueValues);

uniqueValues.forEach(console.log);

