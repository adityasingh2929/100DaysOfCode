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
            lastname: "Singh"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

// This is done when we're dealing with APIs, etc. and we dont know if the value exists or not.
// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b",
}

const obj2 = {
    3: "c",
    4: "d",
}

// This will join them but it'll create looped objects.
// const obj3 = {obj1, obj2};

// const obj3 = Object.assign(obj1, obj2);
// same as above, just considered a good practice.
const obj3 = Object.assign({}, obj1, obj2);

console.log(obj3);


