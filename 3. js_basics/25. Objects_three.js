const course = {
  coursename: "Chai Aur JS",
  price: "999",
  courseInstructor: "ADITYA",
};

console.log(course.courseInstructor);

// Now we can generalize this above, make it efficient this way:
// THIS IS KNWON AS DESTRUCTURING AN OBJECT.

const { courseInstructor } = course;

console.log(courseInstructor);

const { price: p } = course;
console.log(p);

// What's API?
// Apna kaam kisi aur k matthe daalna, jiske upar dala h wo h API.
// Now the values from API (i.e the data) comes in 'JSON' format.

// JSON data.
// {
//   "name": "ADITYA SINGH",
//   "price": "999",
//   "coursename": "Chai Aur JS"
// }

// Sometimes an API gives the data in Arrays format as well.
// ex:

// [
//   {..},
//   {..},
//   {..},
//   {..},
//   {..},
// ];

// Sometimes to understand the API data, use use some websites, such as JSON Formatter, etc.

