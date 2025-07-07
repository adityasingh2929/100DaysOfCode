// There are two ways to define an object:
    // 1. Literal           2. Constructor

// What's 'Singleton'?
    // Its made when we use 'Constructors'.
    // Its not made when used Literals.
    
    // Object.create() -> Constructor way, we'll study about it later.

// OBJECT LITERALS:

// At time of arrays, we alrdy have the keys pre-defined. (i.e, 0,1,2,3,4,5...)

// const JsUser = {
//     name: "ADITYA SINGH",
//     age: 19,
//     location: "AHMEDABAD",
//     email: "2022aditya29@gmail.com",
//     hours_logged_in_past_week : [2,3,4,5,6,7,7],
//     "home address" : "XYZ STREET, AHMEDABAD"  //now you cant acess this via the 1. method.
// }


// // ACCESSING THE OBJECTS IN JS:

// // 1.

// console.log(JsUser.name);

// // 2.
// console.log(JsUser["email"]);
// console.log(JsUser["home address"]);


// When you've to use A symbol as a key:

const mySym = Symbol("key1");


const newObj = {
    name: "Abhay Singh",
    mySym: "hello_motto"
}

console.log(newObj.mySym);
console.log(typeof newObj.mySym);


const mySym2 = Symbol("key1");


const newObj2 = {
    name: "Abhay Singh",
    [mySym2]: "hello_motto"
}


console.log(newObj2[mySym2]);
console.log(typeof newObj2[mySym2]);
console.log(typeof mySym2);


newObj2[mySym2] = "Motto_lelo";
// Object.freeze(newObj2);
console.log(newObj2);


newObj2.greeting = function(){
    console.log(`HELLO HUMAN, ${this.name}`);  // 'this' will refer to the current/self object.
}

// this prints function's info 
console.log(newObj2.greeting);

// This will execute the function

// Here we'll also be seeing undefined. WE'LL TALK ABOUT THAT LATER.
console.log(newObj2.greeting());



// NOTE:
    // generally we access obj elements via .name, etc but for obj properties that have space or if they're symbol, then we use the [] way.




