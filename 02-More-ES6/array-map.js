// An array of numbers
const numbers = [1, 2, 3, 4, 5];

// ❌ Old way (for loop)
let double = [];

for (let i = 0; i < numbers.length; i++) {
  double.push(numbers[i] * 2);
}
// console.log(double); // [2, 4, 6, 8, 10]

const sum = numbers.map((num) => num + 2);
console.log(sum);

const skills = ["HTML", "CSS", "JS"];

const skill = skills.map((element, index) => {
  console.log(`Index : ${index} Skill: ${element}`);
});

// 🤷‍♂️ Map with Objects

const users = [
  { name: "Sujon", age: 24 },
  { name: "Rahim", age: 22 },
];
const names = users.map((user) => user.name);
console.log(names);

// 🤷‍♂️ Map with Conditional

const nums = [1, 2, 3, 4];
const result = nums.map((n) => (n % 2 == 0 ? "Even" : "Odd"));
console.log(result)
