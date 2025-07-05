// Math is an Object.
console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.round(4.2));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.7));

console.log(Math.trunc(3.55));
console.log(Math.pow(3, 5));

console.log(Math.min(3, 5, 22, "456", 455.5));
console.log(Math.max(3, 5, 22, "456", 455.5));

// This generates a random value btw 0-1. (decimal values mostly)
console.log(Math.random());

// What to do for non-decimal values?
console.log(Math.random() * 10);
// Now what if its 0.something, then it'll be 0. so we'll add 1 to make sure 0 doesnt comes.
console.log(Math.random() * 10 + 1);

// Now to remove the decimals, we'll use 'floor' function.
console.log(Math.floor(Math.random() * 10 + 1));

// NOW WHAT IF YOU'VE GOT MINIMUM AND MAXIMUM RANGE FOR CREATING THESE RANDOM VALUES.

// EX: RANGE = 10-20.

const min = 10;
const max = 20;

// This will give absolute integer values from 10-20.
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
