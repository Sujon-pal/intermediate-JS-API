// 1️ Spread an Array (Basic)

const numbers = [1, 2, 3];

console.log(...numbers);

// 2️ Copy an Array

// ❌ Reference copy (bad)
const a = [10, 20, 30];
const b = a;

b.push(40);
console.log(...a); // [10, 20, 30, 40] original changed

// ✅ Spread copy
const c = [100, 200, 300];
const d = [...c];

d.push(400);
console.log(...c); // [100, 200, 300]
console.log(...d); // [100, 200, 300, 400]

//  ADD NEW VALUE TO ARRAY

const oldUsers = ["Sujon", "Pal"];

const newArray = [...oldUsers, "rahim"];
console.log(...newArray);

// MERGE TWO ARRAYS
const frontend = ["HTML", "CSS"];
const backend = ["Node", "MongoDB"];

const skills = [...frontend, ...backend];
console.log(...skills);

// FIND MAX VALUE FROM ARRAY
const marks = [45, 60, 80, 90];

// Math.max needs values, not array
const maxMark = Math.max(...marks);
console.log(maxMark);

// SPREAD IN FUNCTION CALL
function sum(a, b, c) {
  return a + b + c;
}

const nums = [5, 10, 15];
console.log(sum(...nums)); // 30
