// NOTE: Giving spaces in file name is not a good practice.


// This datatype is of a num.
const num = 400;

// Now this is a datatype that stores a value of 'number' datatype.
const balance = new Number(500);

// Now, making this a 'number' datatype, we get some functions:
    // ex: toExponential()
    //     toString()
    //     toPrecision()
    //     valueOf()
    //     toFixed()

// Now its a string type object.
// so now it'll have string properties and functions (like .length, etc.).
console.log(balance.toString());
// This will give us 2 decimal places after point, for sure.
console.log(balance.toFixed(2));

let decVar = 34.555;
// This will give us 3 values in answer, but its datatype will become 'String'.
console.log(decVar.toPrecision(3));

// now if the same above was 2, then the ans would've been: 'NOT 34, but the value after rounding off.'
// had it been 34.4 something...it would've been 34.
// for 1123 and toPrecision(3) then it wouldve been -> 1.12e+3.
console.log(decVar.toPrecision(2));


const val = 100000;
// This is by default, US-Standard.
console.log(val.toLocaleString());
// This is for the Indian Styled Commas.
console.log(val.toLocaleString('en-IN'));




