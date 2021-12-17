// *** oprerador de reposo ***
const obj = {
  name: "John",
  age: 30,
  job: "developer",
};

let { name, ...all } = obj;

console.log(name);
console.log(all);

// *** Propagation ***

const obj = {
  name: "John",
  age: 30,
};

const obj1 = {
  ...obj,
  job: "developer",
  city: "Miami",
};

console.log(obj1);

// *** Finally in promises ***

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve("Hello World");
        }, 3000)
      : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizado"));

// *** RegexData ***

const regexData = /([0-9]){4}-([0-9]){2}-([0-9]){2}/;

const match = regexData.exec("2020-01-01");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
