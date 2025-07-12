console.log("Hello World")
console.log("The code has been executed up untill this point.")

// VARIABLES, DATA TYPES AND OBJECT

var a = 5;
var b = 5;
console.log(a+b)
var c = "Aditya";
console.log(typeof(a), typeof(b), typeof(c))
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