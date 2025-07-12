// faulty calculator:
// + --> -
// - --> *
// * --> +
// / --> **
// But it does this only 10% of the time.

// MY SOLUTION:
// console.log("THE CHOICE OF OPERATIONS IN CALCULATOR:");
// console.log("+");
// console.log("-");
// console.log("*");
// console.log("/");

// let a = parseInt(prompt("enter number for calculation: "));
// let b = parseInt(prompt("enter another number for calculation: "));

// let operand = prompt("Enter your choice of operation: ");

// let faulty = Math.random() <= 0.1;

// if (faulty) {
// if (operand == "+") {
//     console.log(a-b);
// } else if (operand == "-") {
//     console.log(a * b);
// } else if (operand == "*") {
//     console.log(a + b);
// } else if (operand == "/") {
//     console.log(a ** b);
// }
// } else {
// if (operand == "+") {
//     console.log(a + b);
// } else if (operand == "-") {
//     console.log(a-b);
// } else if (operand == "*") {
//     console.log(a * b);
// } else if (operand == "/") {
//     console.log(a / b);
// }
// }

// OPTIMIZED SOLUTION
alert("Your options are: +,-,/,*");
let a = parseInt(prompt("Enter the first number"));
let b = parseInt(prompt("Enter the second number"));
let c = prompt("Enter Your choice of operation");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};
let random = Math.random();
if (random > 0.1) {
  // Correct Calculations will be performed
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
} else {
  // Incorrect Calculations will be performed
  c = obj[c];
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
