// There are 6 loops in JS
// 1. for loop
// 2. for in loop
// 3. for of loop
// 4. while loop
// 5. do while loop
// 6. for each loop   -> Will study it Later

// 1. for loop:
for (let i = 1; i < 11; i++) {
  console.log(i);
}

// 2. for in loop is used inside of simple objects to access key and values.

let obj = {
  name: "ADITYA SINGH",
  age: 19,
};

for (const key in obj) {
  const element = obj[key];
  console.log(key, element);
}

// 3. for of loop is used inside of objects like string and Array, as an iterator (inside these datatypes)

for (const i of "ADITYA") {
  console.log(i);
}

// 4. while loop, here we've got to set iterator and its increment specifically

let z = 1;
while (z < 11) {
  console.log(z);
  z++;
}

// 5. do-while loops are only used when we've to print the loop atleast once.
//     the first time the loop will run regardless of anything, the while condition will be applicable from the second iteration onwards

let x = 1;
do {
  console.log(x);
} while (x < 11);

// CONTINUE:
// They skip the current iteration and continue the loop from the next iteration.
// When used, they break out of the loop they're in.
// There is no 'pass' in JS. As we can keep the function empty.
// Ex: function(){}
