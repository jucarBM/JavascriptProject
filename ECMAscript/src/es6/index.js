// **** Default Params y Concatenación ****

// Antes
function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

// es6
function newFunction2(name = 'oscar', age = 32, country = 'MX') {
    console.log(name, age, country);
}

// test
newFunction2();
newFunction2('Oscar', 22, 'CO');

// **** Templates literals ****

var hello = "Hello"
var world = "World"

// Antes
epicTemplate = hello + ' ' + world;
console.log(epicTemplate);

// es6
epicTemplate2 = `${hello} ${world}`
console.log(epicTemplate2);


// **** Multilinea ****

// Antes
let lorem = "Un texto muy largo que tenfo que realizar ahora mismo \n" +
            "Otro texto de otra linea que uso de ejemplo."
console.log(lorem);

// es6
let lorem2 =  `Un texto muy largo que tenfo que realizar ahora mismo
Otro texto de otra linea que uso de ejemplo`
console.log(lorem2);

// **** Desestructuracion ****

let person = {
    'name': 'Oscar',
    'age': 32,
    'country': 'MX'
}

// Antes
console.log(person.name, person.age, person.country);

// es6
let { name, age, country } = person;
console.log(name, age, country);

// **** Spread Operator ****

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Camila', 'Andrea'];

// es6
let education = ['David', ...team1, ...team2];
console.log(education);

// **** LET y CONST ****

{
    var globalVar = "Global Var";
}
{
    let globalLet = "Global Let";
    console.log(globalLet); // Si es accesible
}
console.log(globalVar);
console.log(globalLet); // no accesible

const a = "b"; // No se puede asignar mas de una vez
a = "c";

// **** Parmetros de objetos ****
let names = 'Juan Carlos';
let age = 25;

// Antes
obj = { names: names, age: age };
console.log(obj);

// es6
obj2 = { names, age};
console.log(obj2);


// **** Arrow Functions ****
const names = [
    { name: 'Juan Carlos', age:25 },
    { name: 'Jose', age:17}
]

// Antes
let listOfNames = names.map(function(item) {
    console.log(item.name);
})

// es6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    // ...
}

const listOfNames4 = name => {
    // ...
}

const square = num => num * num;
console.log(square(5));

// **** Promesas ****

// Asincronismo en javascript

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Hey!');
        } else {
            reject('Ups!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

// **** Clases ****

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return valueA + valueB;
    }
}

a = new calculator();
console.log(a.sum(2,2));


// **** Modulos ****

import hello from './module.js';
console.log(hello());


// **** Generadores ****
function* helloWorld(){
    yield 'Hello, ';
    yield 'World';
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);