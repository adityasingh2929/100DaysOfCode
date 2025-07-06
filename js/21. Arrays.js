// Array is a collection of single/multiple elements of same/different datatypes.
// The arrays in JS are 'Re-Sizable'.

// There can be two ways of copying an array:
// 1. Shallow Copy: A copy of array where its copy is taken from the same reference point, i.e changing the copied array would result in change of original array as well.

// 2. Deep Copy: A copy of array where its copy has nothing to do with the same reference point. i.e changing the copied array would not result in change of the original array.

//  ARRAY PROTOTYPE contains all the properties/methods about the array.

const arr1 = [11, 22];
const arr2 = ["hello", true];

const arr3 = new Array("hello", true, 23, 45.45, [3, "yolo"]);

console.log(arr1[0]);

// ARRAY METHODS.

const MyArr = [2, 45];

MyArr.push(45);
console.log(MyArr);

MyArr.pop();
console.log(MyArr);

// Adds the element to the start of the array.
MyArr.unshift(34);
console.log(MyArr);
// But the problem with unshift is that using that requires for all the rest of the elements in the array to be shifted.

// It removes the first element of the array.
MyArr.shift();
console.log(MyArr);

// Questionnaire methods of Arrays (that give ans. in true/false).

console.log(MyArr.includes(24));
console.log(MyArr.includes("45"));

console.log(MyArr.indexOf("45"));
console.log(MyArr.indexOf(9));
console.log(MyArr.indexOf(2));

// Joining arrays using .join() function.

const newArr = MyArr.join();
console.log(MyArr);
console.log(newArr);

console.log(typeof MyArr);
console.log(typeof newArr);

// Slice vs Splice:

const MyArrVar = [0, 11, 22, 33, 44];
console.log("A", MyArrVar);

const myn1 = MyArrVar.slice(1, 3);
console.log(myn1);

console.log("B", MyArrVar);

const myn2 = MyArrVar.splice(1, 3);
console.log(myn2);
console.log("C", MyArrVar);
