function greet(name){
    console.log("Hey",name,"How're you?");
    console.log("Hoping that you're doing good,",name+"!!");
}

greet("ADITYA");


// c=2 is a default parameter
function product(a,b, c=2){
    return a*b*c;
}

let result1 = product(3,5);
console.log(result1);
let result2 = product(3,5,3);
console.log(result2);


// Arrow function - shorter ways of writing functions in JS.

const squares = x => x*x;

// this is equal to:
// function square(x){
//     return x*x;
// }

// squares is a function name.
console.log(squares(5));

const func1 = (x) =>{
    console.log("This is an arrow function",x);
}
func1(2);

