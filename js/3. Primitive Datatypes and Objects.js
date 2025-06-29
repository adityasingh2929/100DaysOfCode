// Data Types are of two types: 
//  1. Primitive Datatype (fundamental datatypes in JS)
//  2. Non-Primitive Datatype (user-defined, aka Objects)

// 1. Primitive Datatypes:
//     Number
//     undefined
//     Boolean
//     String
//     Symbol  -> Will study it later
//     Big Int
//     null 

// Null is a type of primitive datatype but in the browser, it shows that its an object. 
// This is a mistake which was done in the past, in the beginning, now since then, a lot of code relies on this
// So we cant just change it.

// 2. Objects (or non-primitive datatypes)
//     Plain Objects
//     Array
//     Functions
//     Date
//     maps 
//     sets 
//     json
//     etc.  

let a = 22.3;
let b = 10;
let c = false;
let d;
let e = "ADITYA SINGH";
let f = null;

console.log(a,b,c,d,e,f)
console.log(typeof a,typeof b,typeof c,typeof d,typeof e,typeof f)


console.log()
console.log()

// A plain object is a collection of key-value pairs, where the value can be any datatype.

let o = {
    name: "ADITYA SINGH",
    "Roll no": 23,
    "Employee Status": true,
    "Salary": 23.56
}

console.log(o);

o.attendance = 34;

console.log(o);

o.attendance = 34.5;

console.log(o);
