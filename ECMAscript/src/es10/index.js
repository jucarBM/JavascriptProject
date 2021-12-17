// *** Flat ***
let array = [1, 2, 3, [1, 2, 3, [(1, 2, 3)]]];

console.log(array.flat(2));

// *** FlatMap ***
let array = [1, 2, 3, 4, 5];

console.log(array.flatMap((x) => [x, x * 2]));

// *** Trim Start ***

let hello = "            Hello World             ";
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());

// *** try- catch ***
// antes
try {
  throw "error";
} catch (error) {
  console.log(error);
}
// ahora no necesita declarar error
try {
  throw "error";
} catch {
  console.log(error);
}

// *** From entries***
let entries = [
  ["name", "juan"],
  ["age", "25"],
];
console.log(Object.fromEntries(entries));

//  *** Objeto simbolo ***
let sym1 = Symbol("keDescription del symbol");
console.log(sym1.description);
