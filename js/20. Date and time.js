// JS took one date, and now calculates all the dates relative to that date.
// That date is 1 Jan 1970.
// The date is calculated in milliseconds so that it can be compared easily.

console.log();

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());

console.log();

// Date is an Object datatype.
console.log(typeof myDate);

// It should be noted that months are started from 0, i.e 0-> jan. Therefore 7th was for Aug instead of July.
let myCreatedDate = new Date(2025, 7, 5);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

console.log();

// When you want to see the date in a particular format!
// Now when you write in mm-dd-yyyy type format, 1 -> jan and so on.
let myNewDate = new Date("06-05-2025");
console.log(myNewDate.toDateString());

console.log();

// This shows the date (in milliseconds) till now (from 1 Jan 1970.).
// These can be used to calculate the winner in quizzes, etc.
let myTimeStamp = Date.now();
console.log(myTimeStamp);
// This is how we can convert the normal mm-dd-yyyy format into milli-seconds.
console.log(myNewDate.getTime());

console.log();

// now we can convert the 'milli-second' time into seconds:

console.log(Math.floor(Date.now() / 1000));

console.log();
console.log();

let myVar = new Date();
// + 1 because it starts from 0 and we dont want to confuse the users.
console.log(myVar.getMonth() + 1);
console.log(myVar.getDay());
