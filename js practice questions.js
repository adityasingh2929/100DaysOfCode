// 1. Writing a function that Reverses a String:

// function RevString(varString) {
//   let length = varString.length - 1;
//   let refVar = "";
//   for (let i = length; i >= 0; i--) {
//     refVar += varString[i];
//   }
//   return refVar;
// }

// let result = RevString("Hello");
// console.log(result);

// 2. Writing a function that counts the number of vowels in a string:

// function ValFinder(val){
//     let result;
//     let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
//     for(let j=0;j<vowels.length;j++){
//         if(val==vowels[j]){
//             result = true;
//             return result;
//     }
//     }

//     return false;
// }

// function VowelCount(VarString) {
// let counter = 0;
// for (let i = 0; i < VarString.length; i++) {
//     if (ValFinder(VarString[i])) {
//     console.log(ValFinder)
//     counter += 1;
//     }
// }
// return counter;
// }

// let result = VowelCount("Yoloo");
// console.log(result);

// // the code [if(VarString[i] in vowels)] wont work as 'in' is used in JS only for searching the indexes/keys.
// // Not the values.

// 3. Write a function that takes a number and returns "Even" or "Odd".

// function EvenOdd(num){
//     if(num%2==0){
//         return "Even";
//     }
//     return "Odd";
// }

// result = EvenOdd(10+1);
// console.log(result);

// 4. Loop from 1 to 100: if no. divisible by 3 -> print Fuzz, if by 5 -> print Buzz and if by both then print -> FizzBuzz.

// function Checker(){
//     for(let i=0;i<101;i++){
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz");
//     }
//     else if(i%5==0){
//         console.log("Buzz");
//         }
//     else if(i%3==0){
//         console.log("Fizz");
//     }
//     }
// }

// Checker();

// 5. Write a function that takes an array and returns the largest number:

// function LargestFinder(arr){
//     let max = arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max = arr[i];
//         }
//     }
//     return max;
// }

// let arr = [23,45,22,5,67,0,5.5,"87"];
// let result = LargestFinder(arr);
// console.log(result);

// 6. Capitalize first letter of each word:

    // function WordCapitalizer(VarString) {
    //   let refVar = "";
    //   let counter = 0;
    //   for (let i = 0; i < VarString.length; i++) {
    //     if(VarString[i] == " ") {
    //         refVar += " ";
    //         counter = 1;
    //     }
    //     else if(counter==1 || i==0){
    //         refVar += VarString[i].toUpperCase();
    //         counter = 0;
    //     }
    //     else{
    //         refVar += VarString[i];
    //     }
    //   }
    //   return refVar;
    // }

    // let VarString = "my name is aditya singh, i am nineteen years old.";
    // let result = WordCapitalizer(VarString);

    // console.log(result);


// 7. Write a function that checks for palindrome. 

// function PalindromTeller(StringVar){
//     let refVar = StringVar;
//     let revI = StringVar.length - 1;
//     let counter = 0;
//     for(let i=0;i<StringVar.length;i++){
//         console.log(`Normal seq: ${StringVar[i]}   and Reversed seq: ${refVar[revI]}`);
//         if(StringVar[i]==refVar[revI]){
//             counter += 1;
//         }
//         if(i==Math.trunc(StringVar.length/2)){
//             if(counter >= Math.trunc(StringVar.length/2)){
//                 return true;
//         }
//         }
//         revI -= 1;
//     }
//     return false
// }

// result = PalindromTeller("racecar");
// console.log(result);