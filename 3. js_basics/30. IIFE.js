// IIFE -> Immediately Invoked Function Expressions.

// These are used when we want to execute a function immediately.

// ex: a code file that has database connection, so we want it to execute immediately as soon as our app starts.
// ** Global scope k pollution se prblm hoti hai bhot baar, so usko hataane k liye we've used IIFE.  **

(function connection() {
  console.log(`DB CONNECTED!`);
})();

// this wont run as the first function does not have ';' at the end, so the js interpreter doesnot know when to stop.
(function connections() {
  console.log(`DB CONNECTED AGAIN!`);
})();

// Now this function runs as soon as we run the file, the first '()' is for function definition and the second '()' is for execution.

// An arrow function can be IIFE as well:

((name) => {
  console.log(`Hello ${name}!`);
})("ADITYA");

console.log("ALL THE FUNCTIONS HAVE ENDED!");

// IIFE can be named, (first and function is an example.).
