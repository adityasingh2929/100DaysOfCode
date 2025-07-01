// We know about the basic comparisions. I.e comparision of same datatypes.
// Here we'll talk about comparision btw. two or more different datatypes.

// console.log("2" > 1);  // 2 conv. to number
// console.log("02">1);   // 02 conv. to number

// Here, when comparing two different datatypes, the result remains uncertain, and JS allows these comparisions to happen because it was designed to throw minimal errors.
// Hence we use TypeScript, a JS version that does not allow these issues and throws error straight away.

console.log(null>0)
console.log(null==0) 
console.log(null>=0)
console.log(null<=0)
console.log(null!=0)
// Unpredictable results bcoz null is sometimes conv. to NaN, SO AVOID THESE COMPARISIONS.

console.log();

console.log(undefined==0);
console.log(undefined<=0);
console.log(undefined>=0);
console.log(undefined!=0);
console.log(undefined<0);
console.log(undefined>0);

// '===' and '!==' checks strictly, i.e checks both datatype and value.
