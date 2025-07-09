function sayMyName() {
  // This is function definition
  console.log("A");
  console.log("D");
  console.log("I");
  console.log("T");
  console.log("Y");
  console.log("A");
}

sayMyName; // This is referencing the function
sayMyName(); // This is executing the function

function adding(num1, num2) {
  // Parameters.
  console.log(num1 + num2);
}

adding(3, 5.5); // ans: 8.5, Arguments
adding("3", 5); // 35
adding("3", "5"); // 35
adding(3, "5"); // 35

function product(num1, num2) {
  return num1 * num2;
}

let result = product(3, "4");
console.log(result);

function loggedLog(username) {
  // undefined = false.
  if (!undefined) {
    console.log("Please enter a username!");
    return;
  }
  return `${username} just logged in.`;
}

console.log(loggedLog("Aditya"));
// When you pass nothing, 'undefined' will get passed as an argument.
console.log(loggedLog());

// Also, to avoid such cases, u can give default parameters.

function loggedLogs(username = "ADITYA") {
  return `${username} just logged in.`;
}

console.log(loggedLogs("Abhay"));
// When you pass nothing, 'undefined' will get passed as an argument.
console.log(loggedLogs());
