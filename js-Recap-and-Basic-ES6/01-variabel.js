// 🤷‍♂️ VAR

var name = "Sujon"; // declare variable
var name = "Pal"; // re-declare (allowed)
name = "Developer"; // re-assign (allowed)

console.log(name); // Output: Developer

if (true) {
  var age = 23; // var works outside block
}

console.log(age); // Output: 23 ❌ (not safe)

// 🤷‍♂️ LET

let city = "Dhaka"; // declare variable
city = "Chittagong"; // change variable value (Allowed)
console.log(city);

// let city = "Khulna"; // ❌ error (re-declare not allowed)

if (true) {
  let country = "Bangladesh";
  console.log(country); // works here
}

// console.log(country); // ❌ error (block scoped)

const birthYear = 2001;
// birthYear = 2002;    // ❌ error (cannot change)

console.log(birthYear); // Output: 2001

const users = ["sujon", "shan", "sumon"];
// users = ["Rahim"];
// console.log(users)   // not allowed
users.push("kamal"); // allowed this
console.log(users);

/* const with object */
const user = {
  name: "Sujon",
  role: "Student",
};

// Object value can be changed
user.role = "Web Developer"; // allowed
user.age = 29; // allowed

console.log(user);
