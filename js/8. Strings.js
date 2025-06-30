// Js is known to be a very forgiving language, it is because initially, it was designed to run on the browsers and you dont want a lot of errors there, hence it tries to throw very less errors at you.

// ex: using semicolon is optional, etc.

let name  =  "ADITYA SINGH";
console.log(name[7]);
// out of range, but doesnt throw error, simple returns undefined.
console.log(name[12]);
// Here, name has a dash on itself because once it used to be an global object (keyword).

console.log(name.length);


// About STRING PRINTING AND ITS ALTERNATIVE
let a = "Aditya"
let b = "Singh"

console.log("My first name is " + a + " and my last name is " + b);
console.log("My first name is",a,"and my last name is",b);

// easy way
console.log(`My first name is ${a} and my last name is ${b}`);

// if you've to use some characters inside a string, like '"', etc. Then we use backticks.

console.log(`My name is "ADITYA SINGH".`);

console.log();  

// String Functions
let strings = "This is India.";
// .length is a property, hence no parenthesis required.
console.log(strings.length);
// Whereas, these two are functions, hence parenthesis is required at the end.
console.log(strings.toLocaleLowerCase());
console.log(strings.toUpperCase());


// Slicing a String
let names = "ADITYA SINGH";
// This will give you elements from index 1 to 3. -> i.e DIT
console.log(names.slice(1,4))


// Replacing in Strings.

console.log(names.replace("A","7"));
console.log(names.concat(" AND 19 YEARS OLD."));

// .trim removes white spaces

let vars = "    AD  ";
console.log(vars);
console.log(vars.trim());


// NOTE, STRINGS ARE IMMUTABLE -> THAT IS, ONCE DECLARED AND INITIALIZED -> THEY CANT BE UPDATED AFTERWARDS.


console.log(names.charAt(0));
console.log(names.indexOf("A"));
