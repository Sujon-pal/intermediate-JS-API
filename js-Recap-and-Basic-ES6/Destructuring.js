// 🟢 PART 1: ARRAY DESTRUCTURING

const colors = ["red", "green", "blue"];

// take values by position
const [first, second] = colors;
// 📌 Rule: Position matters (index based)
console.log(first); // red
console.log(second); // green

// 🟡 Skip Values

const numbers = [10, 20, 30, 40];

// skip 20
const [a, , c] = numbers;

console.log(a); // 10
console.log(c); // 30

// 🔵 PART 2: OBJECT DESTRUCTURING

const user = {
  name: "Sujon",
  age: 22,
  role: "Frontend Developer",
};

// key name must match
const { name, age } = user;

console.log(name);
console.log(age);

// 🟡 Default Value

const user2 = {
  name2: "Sujon",
};

const { name2, country = "Bangladesh" } = user2;

console.log(country); // Bangladesh

// 🟠 Nested Object Destructuring

const person = {
  name3: "Sujon",
  address: {
    city: "Dhaka",
    zip: 1207,
  },
};

const {name3, address:{city,zip}} = person;
console.log(city)