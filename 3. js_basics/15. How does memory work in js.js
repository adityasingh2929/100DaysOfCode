// We'll understand How memory works in JavaScript.

// Two types of memory are used in JavaScript

    // 1. Stack Memory (used for primitive datatypes)
            // -> Here, the new variables that are same as prev. variables are actually a copy of them. 
    // 2. Heap Memory (used for non-primitive datatypes)
            // -> Here, the new variables that are same as prev. variables are actually the reference of that old variable.
    //  Keep in mind that the variablenames of non-primitive datatype will go to stack as well, but their values that they'll point to, will be stored in heaps.


// Stack.
let name = "AdityaSingh";
let newname = name;
console.log(name);
console.log(newname);
// Now if I were to change the newname var, the 'name' var. would not have any effect on it.
newname = "AnanayaSingh";
console.log(name);
console.log(newname);

console.log()
console.log()

// Heap.
let obj = {
    email:"2022aditya29@gmail.com",
    pass:"pass@123"
}
let newobj = obj;
console.log(obj);
console.log(newobj);
// Now if I were to change the newobj var, the 'obj' var. would also have an effect on it, as they're both pointing to the obj value.
newobj.pass = "Singhisking@2929"
console.log(newobj.pass);
console.log(obj.pass);