// Here we'll discuss about Switch in JS.

// SYNTAX:
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = "3";
// const month = 3; -> would print March.

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;

  case 12:
    console.log("December");

    break;

  default:
    console.log("Invalid Value!");

    break;
}

// Note: If cases mai break nhi hoga then it'll keep on executing all the cases, IF AND ONLY IF, one case gets right.
// It wont execute default tho, default is like an 'else'.
// Hence break is used in every case, especially in default.
// case value can be string, etc. as well.

// ------------------------------------------------------------------------ //

const user = [];
// const user = "a"; -> would execute if block.
if (user) {
  console.log("Got user Email");
} else {
  console.log("Did not get user Email");
}

// FALSY VALUES:
// false, 0, "", null, -0, BingInt's 0n, undefined, NaN
// Rest are Truthy values.

// Truthy values:
// "0", 'false', " ", [], {}, function(){}, etc.

// CHECKING IF OBJECT / ARRAY IS EMPTY:

const myArr = [];
if (myArr.length === 0) {
  console.log("ARRAY IS EMPTY");
}

const myObj = {};
if (Object.keys(myObj).length === 0) {
  console.log("OBJECT IS EMPTY");
}

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
