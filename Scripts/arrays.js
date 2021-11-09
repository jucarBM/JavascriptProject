var frutas = ["Manzana", "Pera", "Naranja", "Sandia"];

console.log(frutas[0]);

var masFrutas = frutas.concat(["Uva", "Melon"]);
var masFrutas2 = frutas.push("Uva"); // agrega un elemento pero en el mismo array (frutas)
var masFrutas3 = frutas.pop(); // almacena la ultima fruta y la elimina
var masFrutas4 = frutas.shift(); // almacena la primera fruta y la elimina
var masFrutas5 = frutas.unshift("Melon"); // agrega un elemento al principio del array
var masFrutas6 = frutas.splice(2, 1); // elimina un elemento del array
var masFrutas7 = frutas.slice(1, 3); // crea un nuevo array con los elementos del array original
var masFrutas8 = frutas.indexOf("Pera"); // devuelve el indice del elemento
var masFrutas9 = frutas.join("-"); // devuelve un string con los elementos separados por un caracter
var masFrutas10 = frutas.reverse(); // invierte el orden de los elementos del array (no modifica el array original)
var masFrutas11 = frutas.sort(); // ordena los elementos del array (no modifica el array original)