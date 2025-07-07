const m_heros = ["Thor", "IronMan"];
const d_heros = ["Superman", "Batman"]

m_heros.push(d_heros);

console.log(m_heros);
console.log(m_heros[2][1]);

m_heros.pop();

// Now if you've to merge the arrays properly:

// METHOD-1:

// Note that concat stores the result in a new array, not the ones participating, whereas push does it on the the array i.e participating.
let newArr = m_heros.concat(d_heros);
console.log(newArr);

// METHOD-2:

// By using spread: '...'.
let ArrVar = [...m_heros, ...d_heros];
console.log(ArrVar);



// DEALING WITH LOOPED ARRAYS:

const LoopedArr = [24,22,2,[45,5],[42,6,[24,1]]];
// if depth = 1 then it wouldve solved 1 layer inside. But infinity solves it all
const FlattenedArr = LoopedArr.flat(1);
const FlattenedArrTwo = LoopedArr.flat(Infinity);

console.log(FlattenedArr);
console.log(FlattenedArrTwo);


// CHECKING AND CONVERTING VALUES INTO AN ARRAY:


console.log(Array.isArray("ADITYA SINGH"));
console.log(Array.from("ADITYA SINGH"));

// THIS GIVES AN EMPTY ARRAY AS ITS NOT DIRECTLY CONVERTIBLE AS ITS NOT MENTIONED THAT the arrays should be of keys or values or both?.
// console.log(Array.from({name: "ADITYA SINGH"}));

let s1 = 100;
let s2 = 200;
let s3 = 300;
let s4 = 400;
let s5 = 500;

console.log(Array.of(s1,s2,s3,s4,s5));
