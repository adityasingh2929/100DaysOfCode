// HERE YOU'LL LEARN ABOUT 1. FOROF 2. FORIN 3. FOREACH loops.

// For of loop is used in case of arrays.
// SYNTAX:
// for (const element of object) {

// }

const greetings = "Hello World!";
for (const greet of greetings) {
  if (greet == " ") {
    continue;
  } else {
    // console.log(`char: ${greet}`);
  }
}

// MAPs (Its an Object [non-primitive datatype] in JS)
// In JavaScript, Map is a built-in object that stores key-value pairs. It's similar to a regular object ({}), but with some key advantages.

// 🔹 Key Features of Map
// Any type of key: Unlike objects, where keys are always strings or symbols, Map allows any value (objects, functions, etc.) as a key.

// Ordered: Iteration over a Map preserves the insertion order of keys.

// Size property: Easily get the number of elements with .size.

// Iterable: You can loop over it using for...of, .forEach(), etc.

// They have unique values (i.e unique key-value pairs).

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("IN", "India");

// console.log(map);

for (const key of map) {
  // prints the whole key-value pair.
  // console.log(key);
}

for (const [key, value] of map) {
  // prints the key and value seperately (of a pair).
  // console.log(key, ' : ', value);
}

// Applying forof loop on an OBJECT.

const myObj = {
  name: "ADITYA SINGH",
  age: 19,
};

// will throw an error saying that objects are not iteratable, hence we'll have to use 'forin' loop.
// for (const [key, value] of myObj) {
//     console.log(key, ' : ', value);
// }

for (const key in myObj) {
  // will print all the keys
  // console.log(key);
  //   console.log(`${key} is key and value is: ${myObj[key]}`);
}

// using forin loop for ARRAYS.

let myArr = [11, 22, 33, 44, 55, 66, 77];

for (const key in myArr) {
  // console.log(key);
  //   console.log(`${key} is key and value is: ${myArr[key]}`);
}

// forin loop can be used on STRINGs as well
// But forin loops cant be used on maps.

// ----------------------------------------------------------------------------------------- //

const coding = ["js", "ruby", "java", "python", "cpp", "javascript", "c"];

// Now, arrays have foreach() as one of its method. (look it up, its a prototype of the array, visible on browsers.)
// Now this forEach() method takes a callback function (no-name functions) as an argument, and in there we can print our items of the array by taking them in as parameters.

coding.forEach(function (item) {
  console.log(item);
});

// arrow functions can be used too.
coding.forEach((item) => {
  console.log(item);
});

// or we can give a reference of a function in the forEach() method, not calling. REFERENCE.

function printMe(item) {
  console.log(item);
}

coding.forEach(printMe);

// now we can have more than one parameter.

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "javascript",
    extension: "js",
  },
  {
    languageName: "python",
    extension: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
  console.log(item.extension);
  console.log();
});
