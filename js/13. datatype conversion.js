// let score = 33;
// console.log(typeof score);

// let marks = "66";
// console.log(typeof marks);

// // CONVERSION INTO INT.

// let conv_value = Number(marks);
// console.log(typeof conv_value);

// // It got converted into a number datatype, but its value would be NaN -> i.e Not A Number.
// // As we said, JS tries to throw minimal errors, so it compromises into converting it into a number but assigns its value as NaN, thats why people use TS.

// let a = "66a3";
// let b = Number(a);
// console.log(typeof b);
// console.log(b);

// console.log()

// let c = undefined;
// let d = Number(c);
// console.log(typeof d);
// console.log(d);

// console.log()

// let e = null;
// let f = Number(e);
// console.log(typeof f);
// console.log(f);

// conversion of boolean values, true -> 1 and false -> 0.

// NOW CONVERSION INTO BOOLEAN.

let val1 = 1;
let BoolVal = Boolean(val1);
console.log(typeof BoolVal);
console.log(BoolVal);

// 1 -> true, 0 -> false, "" -> false, "Non-Empty String" -> true

// CONVERSION INTO STRING.

let val2 = 4;
let StringVal = String(val2);
console.log(typeof StringVal);
console.log(StringVal);

// same will occur with false,null,undefined,etc.
let val3 = true;
let StringValTwo = String(val3);
console.log(typeof StringValTwo);
console.log(StringValTwo);
console.log(StringValTwo[0]);
