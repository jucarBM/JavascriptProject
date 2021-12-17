// *** Dinamic Import ***
const button = document.getElementById("btn");

button.addEventListener("click", async () => {
  const module = await import("./file.js");
  module.hello();
});

// *** Big numbers ***
const bigNumber = 9007199254740991n;

const anotherBigNumber = BigInt(9007199254740991);

console.log(bigNumber);
console.log(anotherBigNumber);

// *** Promise all settled ***

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 1");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2");
  }, 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3");
  }, 1000);
});

Promise.allSettled([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);

// *** Global this ***
console.log(window); // No funciona
console.log(globalThis);
// this es el objeto global

// *** Operador null - optional chain***

const foo = null ?? "default";
console.log(foo);

const user = {};

console.log(user.name ?? "default");
console.log(user?.name?.profile);
