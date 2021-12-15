// *** Object entries ***

const data = {
  hermano: "Jose",
  mama: "Maria",
  papa: "Flavio",
};

const entries = Object.entries(data);

console.log(entries);
console.log(entries.length);

// *** Object values ***
const values = Object.values(data);
console.log(values);
console.log(values.length);

// *** Object keys ***

const keys = Object.keys(data);
console.log(keys);
console.log(keys.length);

// *** Pading strings ***

const hello = "Hello";
console.log(hello.padStart(9, "Hey"));
console.log(hello.padEnd(12, "Hey"));

// async await

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve("Hello World");
        }, 3000)
      : reject(new Error("Test Error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};
