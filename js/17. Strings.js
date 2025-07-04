// const name = 'Aditya';
// const repoCount = 50;

// console.log(name+repoCount+" GOOD");

// console.log(`My name is ${name} and my favoriate number is ${repoCount}.`);

const varStrOne = "ADITYA SINGH";
console.log(varStrOne);
console.log(typeof varStrOne);
// THIS IS A STRING DATATYPE, ITS LIKE AN ARRAY OF CHARACTERS.

const varStrTwo = new String(`ADITYA SINGH`);
console.log(varStrTwo);
console.log(typeof varStrTwo);
// NOW THIS ONE IS NOT A STRING, ITS AN OBJECT DATATYPE!


const arrVal = ["hello",2];
console.log(arrVal)
console.log(typeof arrVal);
// Array is an OBJECT DATATYPE, just like we discussed before.



// On console, when u print the string, the browser can show you the methods that can be used on string as well. 
// You can learn about the methods of string,etc. via your browser only.
// SOME OF THE STRING METHODS ARE:

console.log(abc.length);
console.log(abc.toLocaleLowerCase());
console.log(abc.indexOf("A"));
console.log(abc.charAt(1));
// stores the string vals from 0 -> 3.
// this method does not take -ve index
let varString = abc.substring(0,4);
console.log(varString);
// so we use .slice method
let anotherVarString = abc.slice(-8,5);
console.log(anotherVarString);

// .trim() is used to remove white spaces from the given strings.
let varthree = "    ADITYA SINGH    ";
console.log(varthree.trim());

let url = "https://adityasingh#29";
console.log(url.replace("#29","/"));


// You can also use .includes() function, it returns boolean values.

console.log(url.includes("yolo"));
console.log(url.includes("ad"));


// split method.
let splitVar = "Adi-Tya-Singh";
console.log(splitVar.split('-'));



