// Interesting Example.


// WAY 1 OF CREATING A FUNCTION:

// This does not give error
console.log(successor(4));


function successor(num){
    return num+1;
}




// WAY 2 OF CREATING A FUNCTION: (using variables)

// This gives error.
console.log(addTwo(3));

let addTwo = function(num){
    return num+2;
}
