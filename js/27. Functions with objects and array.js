// In this case, '...' is working as a rest operator, this parameter here, took multiple arguments and made them into an array
// Remember, the '...' can also be used as spread operator, i.e to join multiple objects or arrays.
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(2,3,4));
console.log(calculateCartPrice(2, 3, 4, 5));

const user = {
  name: "ADITYA  SINGH",
  course: "Chai Aur JS",
};

function handleObject(anyObject) {
  return `Username ${anyObject.name} is enrolled in ${anyObject.course} course.`;
}

let result = handleObject(user);
console.log(result);

let arr = [100, 200, 300, 400, 500];

function handleArray(anyArray) {
  return `${anyArray[0]} is first element and ${anyArray.length} is array's length.`;
}

// let results = handleArray(arr);
let results = handleArray([1.2, 3.4]);
console.log(results);
