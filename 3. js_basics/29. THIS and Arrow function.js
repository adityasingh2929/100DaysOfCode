// This keyword tells about the current context (object,etc.).

const user = {
  name: "ADITYA SINGH",
  courseName: "Chai Aur JS",
  welcomeMessage: function () {
    // as its inside the user obj, 'this' is referring to the user object.
    console.log(`${this.name}, welcome to the Website!`);
    console.log(this);
  },
};

user.welcomeMessage();
user.name = "ADITYA";
user.welcomeMessage();

// Now since we're inside no object, what would we get while printing 'this'?
// console.log(this);

// executing the above statement in browser would result in Window's object output. (it contains all the click, etc. functionalities).

// NOW WHAT OCCURS WHEN its executed inside a function while being in a node environment

function chai() {
  // global object
  let uname = "ADITYA SINGH";
  console.log(this);
  // Would this.uname print its value? NAH as its a function, its done for objects.
  console.log(this.uname);
}

chai();

const func2 = () => {
  let uname = "ADITYA SINGH";
  // this will give an empty object.
  console.log(this);
  console.log(this.uname);
};

func2();

// ARROW FUNCTIONS
// basic syntax:   () => {}
// Now we can hold this arrow function under a variable, we also can add parameters to it and code as well.

// This is explicit return.
const addTwo = (n1, n2) => {
  return n1 + n2;
};

console.log(addTwo(2, 5));

// Now we can also use implicit return method when the code of the function is one line and has to be returned, so you dont use '{}'.
// Note that if you use '{}', you've got to use return keyword.
// THIS TECHNIQUE WILL BE USED IN REACTJS A LOT.

const product = (n1, n2) => n1 * n2;

console.log(product(3, 4));

// Now what if we've got to return an object? or an array?

const retArr = () => [11, 22];

const retObj = () => ({ 1: "hello", 2: "bye" });

console.log(retArr());
console.log(retObj());

// They're also used a lot when we're dealing with LOOPS.

const myArray = [11, 22, 33, 44, 55, 66, 77];
// myArray.forEach(() => {})
