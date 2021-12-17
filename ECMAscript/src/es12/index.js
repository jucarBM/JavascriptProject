const string = "string es lo que voy a reemplazar string ";

const replaced = string.replace("string", "string2");

console.log(replaced);

const replaced2 = string.replaceAll("string", "string2");

console.log(replaced2);

// *** Metodos privados ***

class Message {
  show(val) {
    console.log(val);
  }
  get  #add(val) {
    return val + 1;
  }
}


const message = new Message();
message.show(message.add(1));


// *** Promise any ***

const promise = new Promise((resolve, reject) => {
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

Promise.any([promise, promise2, promise3]).then((response) =>
{
    console.log(response);
});


// *** Referencias debiles ***
class anyClass{
    constructor(element){
        this.ref = new WeakRef(element);
    }
}

// *** Expresiones y operadores ***

let a = true;
let b = false;

console.log(a &&= b);
console.log(a ||= b);
console.log(a ??= b);