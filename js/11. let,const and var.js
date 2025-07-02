const a = 10;
let b = 1;
var c = 4;
d = 5;

// a = 1;
// console.log(a); //Not Allowed.


b = 100;
console.log(b);

c = 400;
console.log(c);

d = 500;
console.log(d);


// Now, there are few diff. ways to declare a var in JS, but it didnt know much about Scope.



console.log("Hello World")
console.log("The code has been executed up untill this point.")

// VARIABLES, DATA TYPES AND OBJECT

var aa = 5;
var bb = 5;
console.log(aa+bb)
var cc = "Aditya";
console.log(typeof(aa), typeof(bb), typeof(cc))
console.log()
console.log()

// Variables can only contain either letters, digits, '$' or '_'.
// variables can only start with letters,'$' and '_' (cant start with numbers).
// variables cant be reserved words (keywords).
// 'Aditya' and 'aditya' are two different variables.

// We can also use 'const' to define variables
// Best practice is to use 'let' to define variables instead of using 'var'.

// Var is globally scoped whereas let and const are locally scoped (or block scoped)

// 1. 'const' is used when we've to keep certain values constant

const avar = 6;
console.log(avar)
// avar = avar + 1; this is not possible now.


// VAR vs LET

console.log()
console.log()

console.log("VAR vs LET:")
console.log()

console.log("1. Var")
var x = 45;
if(true){
    var x = 33;
    console.log(x)
}
console.log(x)

console.log()
console.log()

console.log("2. Let")

// decalaring y here with let means that its still locally scoped but in this case, its local -> global
let y = 45;
if(true){
    let y = 33;
    console.log(y)
}
console.log(y)


// TO PRINT MULTIPLE VALUES, WE USE 'console.table([val1,val2]);'  