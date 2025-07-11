let arr = [2, 3, 4, 55, 56, 6];

// const values = arr.forEach( (item) => {
//     console.log(item);
//     // even if you write the return statement, it wont return.
//     return item;
// })

// // this returns undefined which means that the .foreach() method does not return anything.
// console.log(values);

// Returning using .forEach() :

emptyArr = [];
arr.forEach((num) => {
  if (num > 5) {
    emptyArr.push(num);
  }
});
// console.log(emptyArr);

//  FILTER

// filter method also takes a callback function as an argument
// this returns the values that are satisfied by the conditions.
let newNums = arr.filter((num) => {
  return num > 5;
});

// this is implicit function, as we're not using "{}", hence we'll not need return.
let newNumsTwo = arr.filter((num) => num > 5);
// console.log(newNumsTwo);

// ----------------------------------------------------------------------------------------------------- //

const books = [
  {
    name: "The Silent River",
    author: "Emily Hart",
    publishing_Date: "2012-06-15",
    genre: "Mystery",
  },
  {
    name: "Whispers in the Wind",
    author: "James Corwin",
    publishing_Date: "2015-09-23",
    genre: "Romance",
  },
  {
    name: "Beneath the Crimson Sky",
    author: "Laura Simmons",
    publishing_Date: "2018-01-10",
    genre: "Historical Fiction",
  },
  {
    name: "Echoes of the Past",
    author: "Michael Lang",
    publishing_Date: "2011-04-03",
    genre: "History",
  },
  {
    name: "The Forgotten Kingdom",
    author: "Rachel Yoon",
    publishing_Date: "2016-11-19",
    genre: "Fantasy",
  },
  {
    name: "Shadows of the Mind",
    author: "Nathan Cole",
    publishing_Date: "2019-08-07",
    genre: "Psychological Thriller",
  },
  {
    name: "Voyage to Terra Nova",
    author: "Isabel Greene",
    publishing_Date: "2020-02-25",
    genre: "Science Fiction",
  },
  {
    name: "The Time Weaver",
    author: "Omar Delgado",
    publishing_Date: "2013-07-30",
    genre: "Fantasy",
  },
  {
    name: "Ashes and Frost",
    author: "Lena Winters",
    publishing_Date: "2017-10-12",
    genre: "History",
  },
  {
    name: "The Labyrinth Code",
    author: "Victor Hayes",
    publishing_Date: "2021-05-18",
    genre: "Adventure",
  },
];

let bookUser = books.filter((bk) => {
  if (bk.genre === "History") {
    return bk;
  }
});

console.log(bookUser);

console.log();

//  ---------------------------------------------------------------------- //

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// .map() is almost the same as filter() and forEach().
// its basically used to return each transformed element of the array.
const abcVar = myNums.map((num) => num + 10);
console.log(abcVar);

// ok, few thoughts on map,filter and foreach

// These are array methods: .forEach(), .filter(), .map()
// All of them take a callback function as an argument.
// The callback gets called once for each element in the array and no name of the function is required.

// .forEach()
// Use for doing something with each element (like printing or updating UI).
// Does not return anything (undefined).
// You can't use return inside it to create a new array.

// .filter()
// Use to filter elements based on a condition.
// Returns a new array with only the elements where the callback returns true.

// .map()
// Use to transform each element (e.g., double it).
// Returns a new array with the same length, but transformed values.

// Now, onto Chaining:

// the chained .map() method will have the previous functions final ans. (i.e iterator*10)
let anotherVar = myNums.map((num) => num * 10).map((num) => num + 1);

console.log(anotherVar);
