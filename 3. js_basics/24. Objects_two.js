// Now we'll talk about the part-2
// 2. Using Constructors to define objects.

// Singleton Object
const HelloVar = new Object();

// Non-Singleton Object
const tinderUser = {};

tinderUser.id = "itss.aditya";
tinderUser.name = "Aditya Singh";
tinderUser.isLoggedIN = false;

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Aditya",
      lastname: "Singh",
    },
  },
};

console.log(regularUser.fullname.userfullname.firstname);

// This is done when we're dealing with APIs, etc. and we dont know if the value exists or not.
// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "c",
  4: "d",
};

// This will join them but it'll create looped objects.
// const obj3 = {obj1, obj2};

// Syntax for below line: Object.assign(target,source)
// So if we take an empty obj in first parameter, then it becomes our target.
// const obj3 = Object.assign(obj1, obj2);
// same as above, considered a good practice.

const obj3 = Object.assign({}, obj1, obj2);

console.log(obj3);

// ANOTHER METHOD IS:

const obj4 = { ...obj1, ...obj2 };
console.log(obj4);

// Now we use this when the data is coming from the database

// Example of the data: [objects inside an array]

const users = [
  { infos1: "hello1" },
  { infos2: "hello2" },
  { infos3: "hello3" },
  { infos4: "hello4" },
  { infos5: "hello5" },
];

// how you access them?
console.log(users[1].infos);
// These give arrays.
console.log(Object.keys(users));
console.log(Object.values(users));
console.log(Object.entries(users));

// Sometimes when we're accessing these types of values, sometimes, they dont have them, so in order to avoid errors,
// we use this:
console.log(users.hasOwnProperty("infos3"));
