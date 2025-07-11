//  Reduce is just like a method that is used on array (just like .filter, .foreach, .map) that takes a callback function.
// .reduce() reduces an array to a single value, it could be a string, number, obj, etc.

// IT WORKS BY running a callback function on each element in the array, carrying forward an accumulator that builds up the final result.

// .reduce() takes two arguments, i.e callback function and initial value for the accumulator.

let myArr = [1, 2, 3, 4, 5, 6, 7];
let result = myArr.reduce((acc, num) => {
  //acc. is the added value that will be carried forward whereas num is the current iterator's value.
  //   console.log(`acc: ${acc} and num: ${num}`);

  return acc + num; //this will return only and only after iteration is finished.
}); //this 0 is the initial value of the accumulator. If you dont mention it then the acc.'s first value is first element of the array.

// Same but more optimized:

let result2 = myArr.reduce((acc, num) => acc + num, 0);

console.log(result);
console.log(result2);

// EX:

const shoppingCart = [
  {
    itemName: "js course",
    price: 999,
  },
  {
    itemName: "html course",
    price: 299,
  },
  {
    itemName: "css course",
    price: 499,
  },
  {
    itemName: "js course",
    price: 699,
  },
  {
    itemName: "js course",
    price: 1200,
  },
  {
    itemName: "js course",
    price: 450,
  },
  {
    itemName: "js course",
    price: 349,
  },
];

let sum = shoppingCart.reduce((acc, num) => acc + num.price, 0);
console.log(`Your total is ${sum}`);
