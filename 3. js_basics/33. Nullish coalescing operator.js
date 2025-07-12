// This operator is like keeping fallback values for variables.

// NULLISH COALESCING OPERATOR (??): null undefined.
// This is used because when in projects, we call values, sometimes they can be null or undefined...so if that's the case then we use this.

let val1;
val1 = 5 ?? 10;
console.log(val1);

let val2;
val2 = null ?? 10;
console.log(val2);

let var1 = undefined ?? 15;
console.log(var1);

let var2 = null ?? 20 ?? 10;
console.log(var2);

let var3 = null ?? undefined ?? 10;
console.log(var3);

let var4 = undefined ?? null ?? 10;
console.log(var4);

// TERNARY OPERATOR (one-liner if-else)
// SYNTAX:
// condition ? true : false;

// Ternary operators and nullish coalescing operators are different.

const price = 100;
const ans = price > 80 ? console.log("yes") : console.log("no");
